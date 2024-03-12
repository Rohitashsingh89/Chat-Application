import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

function Chats() {
  // const [messages, setMessages] = useState([]);
  // const socket = io('http://localhost:8000');

  // useEffect(() => {
  //   // const socket = io('http://localhost:8000', { transports: ['websocket'] });

    
  //   // Emit a message when the component mounts (for testing)
  //   // socket.emit('sendMessage', { sender: 'user123', receiver: 'user456', message: 'Hello!' });

  //   // Listen for received messages and update state
  //   // socket.on('receiveMessage', ({ sender, message }) => {
  //   //   // Update messages state to include the new message
  //   //   setMessages(prevMessages => [...prevMessages, { sender, message }]);
  //   // });
    
  //   socket.on('chatMessage', (message) => {
  //     setMessages((prevMessages) => [...prevMessages, message]);
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  return (
    <>
      <div>
        <h1>Chat Interface</h1>
        <div>
          {/* Display received messages */}
          {messages.map((msg, index) => (
            <div key={index}>
              <p>From: {msg.sender}</p>
              <p>Message: {msg.message}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Chats;
