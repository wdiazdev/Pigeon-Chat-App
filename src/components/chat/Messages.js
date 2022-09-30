import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';

const Messages = ({ message }) => {
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const ref = useRef();

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    return (
        <div className={`messages ${message.senderId === currentUser.uid && 'sender'}`}>
            <div className="messageInfo">
                <img src={
                    message.senderId === currentUser.uid
                        ? currentUser.photoURL
                        : data.user.photoURL}
                    alt='User' />
                <span>Just now</span>
            </div>
            <div className="messageContent">
                <p>{message.text}</p>
                {message.img && <img src={message.img} alt='Chat' />}
            </div>
        </div>
    )
};

export default Messages