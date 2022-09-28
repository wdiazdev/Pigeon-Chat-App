import React, { useState } from 'react'
import { db } from '../../Firebase';
import { collection, query, where, getDocs } from 'firebase/firestore'

const Search = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState('');
    const [err, setErr] = useState('');


    const handleSearch = async () => {
        const q = query(
            collection(db, 'users'),
            where('displayName', '==', username)
        );

        try {
            const querySnapshot = await getDocs(q);
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
            {err && <span>User not found!</span>}
            {user && <div className="sidebar--user--info">
                <img src={user.photoURL} alt='User Info' />
                <div className="user--info">
                    <span>{user.displayName}</span>
                </div>
            </div>}
        </div>
    )
}

export default Search