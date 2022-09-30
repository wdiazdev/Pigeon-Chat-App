import React, { useContext, useEffect, useState } from 'react'
import Messages from './Messages'
import { ChatContext } from '../../context/ChatContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../Firebase';

const MessagesArea = () => {
    const [messages, setMessages] = useState([]);
    const { data } = useContext(ChatContext);

    useEffect(() => {
        const unSub = onSnapshot(doc(db, 'chats', data.chatId), (doc) => {
            doc.exists() && setMessages(doc.data().messages)
        })

        return () => {
            unSub()
        }
    }, [data.chatId]);

    return (

        < div className='messages--area'>
            {messages && messages.map(m => (
                <Messages messages={m} key={m.id} />
            ))}
        </div >
    )
}

export default MessagesArea