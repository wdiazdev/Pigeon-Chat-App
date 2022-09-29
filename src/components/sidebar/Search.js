import React, { useContext, useState } from 'react'
import { db } from '../../Firebase';
import { collection, query, where, getDoc, setDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { AuthContext } from '../../context/AuthContext';

const Search = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState('');
    const [err, setErr] = useState('');

    const { currentUser } = useContext(AuthContext);

    const handleSearch = async () => {
        const q = query(
            collection(db, 'users'),
            where('displayName', '==', username)
        );

        try {
            const querySnapshot = await getDoc(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data())
            });
        } catch (err) {
            setErr(true);
        }
    };

    const handleKey = e => {
        e.code === 'Enter' && handleSearch();
    };

    const handleSelect = async () => {
        // Chats between two people
        const chatIds = currentUser.uid > user.uid
            ? currentUser.uid + user.uid
            : user.uid + currentUser.uid;
        try {
            const res = await getDoc(doc(db, 'chats', chatIds));

            if (!res.exists()) {
                // Create chat collection
                await setDoc(doc(db, 'chats', chatIds), { messages: [] });

                // Create user chat 
                await updateDoc(doc(db, 'userChats', currentUser.uid), {
                    [chatIds + '.userInfo']: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    },
                    [chatIds + '.date']: serverTimestamp()
                });

                await updateDoc(doc(db, 'userChats', user.uid), {
                    [chatIds + '.userInfo']: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL
                    },
                    [chatIds + '.date']: serverTimestamp()
                });
            }
        } catch (err) { }

    }

    return (
        <div className='search--bar'>
            <div className='search--form'>
                <input
                    type='text'
                    placeholder='Find user'
                    onChange={e => setUsername(e.target.value)}
                    onKeyDown={handleKey}
                />
            </div>
            {err && <span className='search--error'>User not found!</span>}
            {user && <div className="sidebar--user--info" onClick={handleSelect}>
                <img src={user.photoURL} alt='User Info' />
                <div className="user--info">
                    <span>{user.displayName}</span>
                </div>
            </div>}
        </div>
    )
}

export default Search