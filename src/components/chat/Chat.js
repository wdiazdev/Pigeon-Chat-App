import React from 'react'
import Input from './Input'
import MessagesArea from './MessagesArea'

const Chat = () => {
    return (
        <div className='chat'>
            <div className="chat--topbar">
                <span>John Smith</span>
            </div>
            <MessagesArea />
            <Input />
        </div>

    )
}

export default Chat