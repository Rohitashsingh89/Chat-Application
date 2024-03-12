import React from 'react';

function ChatNav({ currentUser }) {
  // const username = localStorage.getItem('userName');

  return (
    <>
        <div className="chatinfo">
        {/* <span>Mosh</span> */}
        {/* <span>{username}</span> */}
        <span>{currentUser.name}</span>
        <div className="chatoption">
          {/* <span className="fa fa-video-camera" style={{fontSize:"15px"}}></span> */}
          {/* <span className="fa fa-user-plus" style={{fontSize:"15px"}}></span> */}
          <span className="fa fa-search" style={{fontSize:"15px"}}></span>
          <span className="fa fa-ellipsis-h" style={{fontSize:"15px"}}></span>
        </div>
      </div>
    </>
  )
}

export default ChatNav;