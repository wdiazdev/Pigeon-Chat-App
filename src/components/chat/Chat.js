import React, { useContext } from 'react'
import Input from './Input'
import MessagesArea from './MessagesArea'
import { ChatContext } from '../../context/ChatContext';

const Chat = () => {
    const { data } = useContext(ChatContext);
    return (
        <div className='chat'>
            <div className="chat--topbar">
                <span>{data.user?.displayName}</span>
            </div>
            <MessagesArea />
            <Input />
        </div>

    )
}

export default Chat