import React, { useContext } from 'react';
import Sidebar from '../components/Sidebar';
import { Chat } from '../components/Chat';
import { AuthContext } from '../context/authContext';

export default function Home({ socket }) {

    const { currentUser } = useContext(AuthContext);
    
    return (
        <>
            <div className='home' >
                <div className="container">
                    <Sidebar socket={socket} currentUser={currentUser} />
                    <Chat socket={socket} currentUser={currentUser} />
                </div>
            </div>
        </>
    )
}
