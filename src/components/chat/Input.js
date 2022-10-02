import {
    arrayUnion,
    doc,
    Timestamp,
    updateDoc,
    serverTimestamp
}
    from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ChatContext } from '../../context/ChatContext';
import attachimg from '../../assets/attachimg.png';
import { v4 as uuid } from 'uuid';
import { storage, db } from '../../Firebase';
import { uploadBytesResumable, ref, getDownloadURL } from 'firebase/storage';


const Input = () => {
    const [text, setText] = useState("");
    const [img, setImg] = useState(null);

    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const handleSend = async () => {
        if (img) {
            const storageRef = ref(storage, uuid());

            const uploadTask = uploadBytesResumable(storageRef, img);

            uploadTask.on(
                (error) => {
                    //TODO:Handle Error
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateDoc(doc(db, "chats", data.chatId), {
                            messages: arrayUnion({
                                id: uuid(),
                                text,
                                senderId: currentUser.uid,
                                date: Timestamp.now(),
                                img: downloadURL,
                            }),
                        });
                    });
                }
            );
        } else {
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now(),
                }),
            });
        }

        await updateDoc(doc(db, "userChats", currentUser.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", data.user.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });

        setText("");
        setImg(null);
    };

    return (
        <div className='input'>
            <input
                type='text'
                placeholder='Type a message'
                onChange={e => setText(e.target.value)}
                value={text}
            />
            <div className="type--area--buttons">
                <input
                    type='file'
                    id='file'
                    style={{ display: 'none' }}
                    onChange={e => setImg(e.target.files[0])}
                />
                <label htmlFor='file'>
                    <img
                        src={attachimg}
                        alt=''
                        style={{ cursor: 'pointer' }}
                    />
                </label>
                <button
                    onClick={handleSend}
                >
                    Send
                </button>
            </div>
        </div>
    )
}

export default Input