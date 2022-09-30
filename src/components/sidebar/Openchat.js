import React, { useContext, useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../Firebase'
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';

function OpenChat() {
    const [chats, setChats] = useState([]);

    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data());
            });

            return () => {
                unsub();
            };
        };

        currentUser.uid && getChats();
    }, [currentUser.uid]);

    const handleSelect = (u) => {
        dispatch({ type: "CHANGE_USER", payload: u });
    };

    return (
        <div className='open--chat'>
            {chats && Object.entries(chats)?.map((chat) => (
                <div className="sidebar--user--info" key={chat[0]} onClick={handleSelect}>
                    <img src={chat[1].userInfo.photoURL} alt='User Info' />
                    <div className="user--info">
                        <span>{chat[1].userInfo.displayName}</span>
                        <p className='last--message'>{chat[1].userInfo.lastMessage?.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default OpenChat;