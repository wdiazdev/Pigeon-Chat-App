import React, { useState } from 'react';
import addavatar from '../assets/addavatar.png';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db, storage } from '../Firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)

            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                (error) => {
                    setError(true);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        });

                        // REGISTER DATA 
                        await setDoc(doc(db, 'users', res.user.uid), {
                            displayName,
                            email,
                            photoURL: downloadURL,
                            uid: res.user.uid,
                        });

                        await setDoc(doc(db, 'userChats', res.user.uid, {}));
                        navigate("/");
                    });
                }
            );
        } catch (error) {
            setError(true);
        }
    };

    return (
        <div className='register--main'>
            <div className='form--container'>
                <span className="logo">Pigeon</span>
                <span className="title">Register</span>

                <form className='form' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <input type="file" id='file' className='file--input' />
                    <label htmlFor='file' className='label--addavatar'>
                        <img
                            src={addavatar}
                            style={{ height: 45 }}
                            className='avatar'
                            alt='Avatar'>
                        </img>
                        <span>Choose an Avatar</span>
                    </label>
                    <button className='button'>Sign Up</button>
                    {error && <span className='register--error'>Invalid email or password</span>}
                </form>
                <p className='member--login'>Are you a member? Login</p>
            </div>
        </div>
    )
}

export default Register




 // .then((userCredential) => {
            //     const user = userCredential.user;

            //     console.log(user)
            // })

            // .catch((error) => {
            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            // });