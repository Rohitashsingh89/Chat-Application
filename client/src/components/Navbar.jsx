import React, { useContext } from 'react';
import user from './user.png';
import { AuthContext } from '../context/authContext';

function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);
  
  const handleLogout = () => {
      logout(currentUser);
  }

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.substr(0, maxLength) + "...";
    }
    return text;
  };
  
  return (
    <>
      <div className="navbar">
        <div className="logo">
          MernChat
        </div>
        <div className="user">
          <img src={user} alt="" />
          <span>{ truncateText(currentUser.name, 5) }</span>
          {/* <span>Tim</span> */}
          <button onClick={handleLogout}>logout</button>
        </div>
      </div>
    </>
  )
}

export default Navbar;