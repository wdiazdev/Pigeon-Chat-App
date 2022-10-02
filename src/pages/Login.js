import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase';

const Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/')
        } catch (err) {
            setErr(true);
        };
    };

    return (
        <div className='register--main'>
            <div className='form--container'>
                <span className="logo">Pigeon</span>
                <span className="title">Login</span>

                <form className='form'
                    onSubmit={handleSubmit}
                >
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <button className='button'>Login</button>
                    {err && <span className='register--error'>Something went wrong.</span>}
                </form>

                <p className='member--login'>
                    Not a member? <Link className='link' to='/register'>Register</Link>
                </p>
            </div>
        </div>
    )
};

export default Login