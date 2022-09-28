import React, { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <div className='navbar'>
            <span className='navbar--logo'>Pigeon</span>
            <div className='navbar--user'>
                <img src={currentUser.photoURL} alt='User info' />
                <span>{currentUser.displayName}</span>
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