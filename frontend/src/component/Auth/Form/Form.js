import React from 'react'
import { useState } from 'react'

import './Form.css'
function Form() {

    const [authData, setAuthData] = useState({ email: '', password: '' })
    
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setAuthData({...authData,[key]:value})
    }
    return (
        <form className='authForm'>
            <input className='authInput' type="email" placeholder='Enter email' name='email' value={authData.email} onChange={handleChange} required />
            <input className='authInput' type="password" name="password" placeholder='Password' value={authData.password} onChange={handleChange} />
    </form>
    )
}

export default Form