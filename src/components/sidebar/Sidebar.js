import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import OpenChat from './OpenChat';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Navbar />
            <Search />
            <OpenChat />
        </div>
    )
}

export default Sidebar