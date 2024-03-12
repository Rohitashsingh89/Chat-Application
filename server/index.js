const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./Routes/auth.js');
const userRoutes = require('./Routes/users.js');
const messageRoutes = require('./Routes/message.js');

const app = express()
dotenv.config();

const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser())

//New imports
const http = require('http').Server(app);
const { Connection } = require('./Database/db.js');


// Database connection 
Connection();

const socketIO = require('socket.io')(http, {
    cors: {
        origin: BASE_URL
    }
});

// // for both group and personal combine 
// socketIO.on('connection', (socket) => {
//   console.log(`⚡: ${socket.id} user just connected!`);
  
//   // Personal Chat
//   socket.on('personalMessage', (message) => {
//     const { receiverId, ...rest } = message;
//     // Emit the personal message to the sender and the recipient
//     socket.to(receiverId).emit('personalMessage', rest);
//     socket.emit('personalMessage', rest); // Send the message back to the sender as well
//   });
  
//   // Group Chat
//   socket.on('login', (userId) => {
//     socket.join(`group-${userId}`); // Join a room with the user's group ID (e.g., group-user123)
//   });
  
//   socket.on('groupMessage', (message) => {
//     // Emit the group message to the room associated with the group ID
//     socketIO.to(`group-${message.groupId}`).emit('groupMessage', message);
//   });

//   socket.on('disconnect', () => {
//     console.log('🔥: A user disconnected');
//   });
// });


// Work fine for group 
socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
  
    //sends the message to all the users on the server
    socket.on('message', (data) => {
      socketIO.emit('messageResponse', data);
    });
  
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
    });
  });
  
app.get('/api', (req, res) => {
  res.json({
    message: 'Hello world',
  });
});

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/chats", messageRoutes)

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});