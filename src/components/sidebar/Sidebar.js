import React from 'react';
import Navbar from './Navbar';
import Openchat from './Openchat';
import Search from './Search';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Navbar />
            <Search />
            <Openchat />
        </div>
    )
}

export default Sidebar