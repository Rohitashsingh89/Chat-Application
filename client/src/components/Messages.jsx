import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Message from './Message';
import axios from 'axios';


function Messages({ messages, currentUser }) {
  const [Chats, setChats] = useState([]);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    async function fetchChats() {
    try {
      const response = await axios.get(`${BASE_URL}/api/chats`
      // , {
      //   params: {
      //     sender: currentUser.userId,
      //   }
      // }
      );
      setChats(response.data);
    } catch (error) {
      console.error('An Error while fetching chats..', error);
    }
  }
  fetchChats();
}, [BASE_URL]);


  return (
    <div className='messages'>
        <Message previousChats={Chats} messages={messages} currentUser={currentUser} />
        {/* <Message/> */}
        {/* <Message/> */}
        {/* <Message/> */}
        {/* <Message/> */}
        
    </div>
  )
}

export default Messages;