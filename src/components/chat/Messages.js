import React from 'react'

const Messages = () => {
    return (
        <div className='messages sender'>
            <div className="messageInfo">
                <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='User' />
                <span>Just now</span>
            </div>
            <div className="messageContent">
                <p>Hello!</p>
            </div>
        </div>
    )
}

export default Messages