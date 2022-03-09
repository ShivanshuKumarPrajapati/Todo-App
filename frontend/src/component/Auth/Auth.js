import React from 'react'
import { useState,useEffect } from 'react';
import './Auth.css';

import Header from './Header/Header'
import Form from './Form/Form'
import Button from './Button/Button.js'


function Login() {

    const [text, setText] = useState('Login')
    const [flag, setFlag] = useState(1);
    

    useEffect(()=>{
        if (flag == 1)
            setText('Login')
        else
            setText('Sign up')
    }, [flag])
    
    return (
        <div className="Page">
            <ul className="auth">
                <li>
                <Header flag={flag} setFlag={setFlag}/>
                <Form/>
                <Button text={text} />
                </li>
            </ul>
        </div>
    );
}

export default Login