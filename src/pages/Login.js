import React from 'react'

const Login = () => {
    return (
        <div className='register--main'>
            <div className='form--container'>
                <span className="logo">Pigeon</span>
                <span className="title">Login</span>

                <form className='form'>
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <button className='button'>Sign Up</button>
                </form>

                <p className='member--login'>New member? Register</p>
            </div>
        </div>
    )
}

export default Login