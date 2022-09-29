import React, { useContext, useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../Firebase'
import { AuthContext } from '../../context/AuthContext';

function Openchat() {
    const [chats, setChats] = useState([])
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, 'userChats', currentUser.uid), (doc) => {
                setChats(doc.data());
            });

            return () => {
                unsub();
            };
        };

        currentUser.uid && getChats();
    }, [currentUser.uid]);

    console.log(Object.entries(chats));

    return (
        <div className='open--chat'>
            {Object.entries(chats)?.map((chat) => (
                <div className="sidebar--user--info" key={chat[0]}>
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

export default Openchat