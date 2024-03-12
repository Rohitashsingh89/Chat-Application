import React from 'react';
import user from './user.png';
import chatimg from './LaptopTable.jpg';

function SenderMessage() {
  return (
    <div className=' sender'>
      <div className="messageInfo">
        <img src={user} alt="" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>This is a sender message</p>
        <p>This is a sender message</p>
        <img src={chatimg} alt="" />
      </div>
    </div>
  );
}

function ReceiverMessage() {
  return (
    <div className='receiver m-2'>
      <div className="messageInfo">
        <img src={user} alt="" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>This is a receiver message</p>
        <p>This is a receiver message</p>
        <img src={chatimg} alt="" />
      </div>
    </div>
  );
}

export default function Message() {
  return (
    <div>
      <SenderMessage />
      <ReceiverMessage />
    </div>
  );
}
