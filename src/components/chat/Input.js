import React from 'react';
import attach from './Chat Assets/attach.png';
import img from './Chat Assets/img.png';


const Input = () => {
    return (
        <div className='input'>
            <input type='text' placeholder='Type a message' />
            <div className="type--area--buttons">
                <img src={attach} alt='Attach file' style={{ cursor: 'pointer' }} />
                <input type='file' id='file' style={{ display: 'none' }} />
                <label htmlFor='file'>
                    <img src={img} alt='' style={{ cursor: 'pointer' }} />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input