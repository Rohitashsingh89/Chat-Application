import React from 'react';
import user from './user.png';
// import chatimg from './LaptopTable.jpg';
// import { formatTimestamp } from './formateTimeStamp';

const SenderMessage = ({ text, date }) => {
  return (
    <div className='sender m-1'>
      <div className="messageInfo">
        <img src={user} alt="" />
        {/* <span>{formatTimestamp(date)}</span> */}
      </div>
      <div className="messageContent">
        <p>{text}</p>
        {/* <img src={chatimg} alt="" /> */}
      </div>
    </div>
  );
}

const ReceiverMessage = ({ text, date }) => {
  return (
    <div className='receiver m-1'>
      <div className="messageInfo">
        <img src={user} alt="" />
        {/* <span>Just Now</span> */}
        {/* <span>{formatTimestamp(date)}</span> */}
      </div>
      <div className="messageContent">
        <p>{text}</p>
        {/* <img src={chatimg} alt="" /> */}
      </div>
    </div>
  );
}
const Message = ({ previousChats, messages, currentUser }) => {
  const allChats = [...previousChats, ...messages];

  // console.log(allChats)
  return (
    <div>
      {allChats.map((message) => (
        // message.name === localStorage.getItem('userName') ? (
        message.sender === currentUser.userId ? (
          <SenderMessage key={message.id} text={message.content} date={message.timestamp} />
        ) : (
          <ReceiverMessage key={message.id} text={message.content} date={message.timestamp} />
        )
      ))}
    </div>
  );
}

export default Message;




// import React, { useEffect } from 'react';
// import user from './user.png';
// import chatimg from './LaptopTable.jpg';

// function SenderMessage({ messages }) {

//   return (
//     <div className=' sender'>
//       <div className="messageInfo">
//         <img src={user} alt="" />
//         <span>Just Now</span>
//       </div>
//       <div className="messageContent">
//         <p>This is a sender message</p>
//         <p>This is a sender message</p>
//         <img src={chatimg} alt="" />
//       </div>
//     </div>
//   );
// }

// function ReceiverMessage() {
//   return (
//     <div className=' receiver'>
//       <div className="messageInfo">
//         <img src={user} alt="" />
//         <span>Just Now</span>
//       </div>
//       <div className="messageContent">
//         <p>This is a receiver message</p>
//         <p>This is a receiver message</p>
//         <img src={chatimg} alt="" />
//       </div>
//     </div>
//   );
// }

// export default function Message() {
//   return (
//     <div>
//       <SenderMessage />
//       <ReceiverMessage />
//     </div>
//   );
// }
