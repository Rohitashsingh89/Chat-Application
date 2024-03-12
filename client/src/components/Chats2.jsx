import React from 'react';
import user from './user.png';

function Chats({ currentUser }) {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.substr(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className='chats'>
      <div className="userinfo">
        <img className='userimg' src={user} alt="" />
        <div className="userbio">
          <span>{ truncateText(currentUser.name, 6) }</span>
          <p>Hey there!</p>
        </div>
      </div>
      {/* <div className="userinfo">
        <img className='userimg' src={user} alt="" />
        <div className="userbio">
          <span>Mosh</span>
          <p>Hey there!</p>
        </div>
      </div>
      <div className="userinfo">
        <img className='userimg' src={user} alt="" />
        <div className="userbio">
          <span>Mosh</span>
          <p>Hey there!</p>
        </div>
      </div>
      <div className="userinfo">
        <img className='userimg' src={user} alt="" />
        <div className="userbio">
          <span>Mosh</span>
          <p>Hey there!</p>
        </div>
      </div>
      <div className="userinfo">
        <img className='userimg' src={user} alt="" />
        <div className="userbio">
          <span>Mosh</span>
          <p>Hey there!</p>
        </div>
      </div>
      <div className="userinfo">
        <img className='userimg' src={user} alt="" />
        <div className="userbio">
          <span>Mosh</span>
          <p>Hey there!</p>
        </div>
      </div>
      <div className="userinfo">
        <img className='userimg' src={user} alt="" />
        <div className="userbio">
          <span>Mosh</span>
          <p>Hey there!</p>
        </div>
      </div>
      <div className="userinfo">
        <img className='userimg' src={user} alt="" />
        <div className="userbio">
          <span>Mosh</span>
          <p>Hey there!</p>
        </div>
      </div> */}
      
    </div>
  )
}

export default Chats;

// import user from './user.png';


// import connectWebSocket from './websocketClient.js';

// const [messages, setMessages] = useState([]);
  // const [inputMessage, setInputMessage] = useState('');

  /*************************************
  // useEffect(() => {
  //   // Establish the WebSocket connection when the component mounts
  //   const socket = connectWebSocket();

  //   // Event handler for receiving messages from the server
  //   socket.onmessage = (event) => {
  //     setMessages((prevMessages) => [...prevMessages, event.data]);
  //   };

  //   // Clean up the WebSocket connection when the component unmounts
  //   return () => {
  //     socket.close();
  //   };
  // }, []);

  // const handleInputChange = (event) => {
  //   setInputMessage(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (inputMessage.trim() !== '') {
  //     // Send the message to the server
  //     const socket = connectWebSocket();
  //     socket.send(inputMessage);
  //     setInputMessage('');
  //   }
  // };
  ************************************************/