import React from 'react';
import addavatar from '../assets/addavatar.png';


const Register = () => {
    return (
        <div className='register--main'>
            <div className='form--container'>
                <span className="logo">React Chat App</span>
                <span className="title">Register</span>

                <form className='form'>
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
                </form>

                <p className='member--login'>Are you a member? Login</p>
            </div>
        </div>
    )
}

export default Register