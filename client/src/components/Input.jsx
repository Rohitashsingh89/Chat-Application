import axios from 'axios';
import React, { useState } from 'react';

function Input({ socket, currentUser }) {
  const [message, setMessage] = useState('');
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const handleSubmit = (e) => {
    e.preventDefault();
    // if(message.trim() && localStorage.getItem('userName')) {
    if(message.trim() && currentUser) {
      const newMessage = {
        content: message,
        // sender: currentUser.name,
        // id: `${socket.id}${Math.random()}`, 
        socketID: socket.id,
        sender: currentUser.userId,
      }
      // socket.emit('message', {
      //   text: message,
      //   // name: localStorage.getItem('userName'),
      //   name: currentUser.name,
      //   id: `${socket.id}${Math.random()}`, 
      //   socketID: socket.id,
      //   userId: currentUser.userId,
      // });
      socket.emit('message', newMessage);

      try {
        const response = axios.post(`${BASE_URL}/api/chats`, newMessage);
        console.log("Message set successfully", response)
      } catch (error) {
        console.error('Error while sending the message', error)
      }
    }
    setMessage('');
  }
  return (
    <div className='inputform'>
      <form onSubmit={handleSubmit}>
        <input type="text"
         name="message"
         id="message" 
         value={message}
         onChange={(e) => setMessage(e.target.value)}
         placeholder='Message'
         />
        <div className="send">
          {/* <span className="fa fa-paperclip"></span>       */}
          {/* <input type="file" id='file' name='file' style={{display: "none"}} multiple /> */}
          {/* <label htmlFor="file">
            <span className="fa fa-file-image-o"></span>      
          </label> */}
          <button type='submit'>Send</button>
        </div>
        </form>
    </div>
  )
}

export default Input;