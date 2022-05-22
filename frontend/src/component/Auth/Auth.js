import React from 'react'
import { useState, useEffect,useRef } from 'react';

import './Auth.css';

import Header from './Header/Header'
import Form from './Form/Form'
import Button from './Button/Button.js'


function Login({setToken}) {
    const [text, setText] = useState("Login");
    const [flag, setFlag] = useState(1);

    const childfxn = useRef(null);

    useEffect(() => {
        childfxn.current();
        if (flag === 1) setText("Login");
        else setText("Sign up");
    }, [flag]);

    return (
        <div className="Page">
        <ul className="auth">
            <li>
            <Header flag={flag} setFlag={setFlag} />
                    <Form flag={flag} setFlag={setFlag} childfxn={childfxn} setToken={setToken}/>
            <Button text={text} />
            </li>
        </ul>
        </div>
    );
    }

export default Login