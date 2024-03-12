import React from 'react';
import Navbar from './Navbar';
import Chats from './Chats2';
import Search from './Search';

function Sidebar({ currentUser }) {
  return (
    <>
        <div className='sidebar'>
            <Navbar/>
            <Search/>
            <Chats currentUser={currentUser}/>
        </div>
    </>
  )
}

export default Sidebar;