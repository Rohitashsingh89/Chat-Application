import React, { useEffect, useState } from 'react';
import Messages from './Messages';
import Input from './Input';
import ChatNav from './ChatNav';

export const Chat = ({ socket, currentUser }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  }, [socket, messages]);
  
  return (
    <div className='chat'>
      <ChatNav currentUser={currentUser} />
      
      <Messages messages={messages} currentUser={currentUser} />
      <Input socket={socket} currentUser={currentUser} />
    </div>
  );
};
