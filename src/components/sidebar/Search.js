import React from 'react'

const Search = () => {
    return (
        <div className='search--bar'>
            <div className='search--form'>
                <input type='text' placeholder='Find user' />
            </div>
            <div className="sidebar--user--info">
                <img src='https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='User Info' />
                <div className="user--info">
                    <span>John Smith</span>
                </div>
            </div>
        </div>
    )
}

export default Search