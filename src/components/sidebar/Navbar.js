import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='navbar--logo'>logo</span>
            <div className='navbar--user'>
                <img src='https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='User Image'></img>
                <span>John</span>
                <button className='navbar--button'>Logout</button>
            </div>
        </div>
    )
}

export default Navbar