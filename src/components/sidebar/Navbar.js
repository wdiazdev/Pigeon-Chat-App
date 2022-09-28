import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase';

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='navbar--logo'>Pigeon</span>
            <div className='navbar--user'>
                <img src='https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='User Info' />
                <span>John Smith</span>
                <button
                    className='navbar--button'
                    onClick={() => signOut(auth)}
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Navbar