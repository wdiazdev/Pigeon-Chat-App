import React from 'react'
import Chat from '../components/chat/Chat'
import Sidebar from '../components/sidebar/Sidebar'

const Home = () => {
    return (
        <div className='home'>
            <div className="container">
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
};

export default Home