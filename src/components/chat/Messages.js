import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';

const Messages = ({ messages }) => {
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const ref = useRef();

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);


    return (
        <div
            ref={ref}
            className={`messages ${messages.senderId === currentUser.uid && 'sender'}`}>
            <div className="messageInfo">
                <img src={
                    messages.senderId === currentUser.uid
                        ? currentUser.photoURL
                        : data.user.photoURL}
                    alt='User' />
            </div>
            <div className="messageContent">
                <p>{messages.text}</p>
                {messages.img && <img src={messages.img} alt='' />}
            </div>
        </div>
    )
};

export default Messages