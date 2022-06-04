import React from 'react'
import { useState, useEffect,useRef } from 'react';

import './Auth.css';

import Header from './Header/Header'
import Form from './Form/Form'
import Button from './Button/Button.js'


function Login({setToken}) {
    const [text, setText] = useState("Login");
    const [flag, setFlag] = useState(1);
    const [errmssg, setErrmssg] = useState('');

    const childfxn = useRef(null);

    useEffect(() => {
        childfxn.current();
        if (flag === 1) setText("Login");
        else setText("Sign up");
    }, [flag]);

    useEffect(() => {
        if (errmssg !== '') {
            setTimeout(() => {
                setErrmssg('');
            }, 2000);
        }
    },[errmssg])

    return (
        <div className="Page">
        <ul className="auth">
            <li>
            <Header flag={flag} setFlag={setFlag} />
            <p className={`errmssg ${errmssg ? 'showErrmssg' : ''}`}>{errmssg} </p> 
            <Form
                flag={flag}
                setFlag={setFlag}
                childfxn={childfxn}
                setToken={setToken}
                setErrmssg={setErrmssg}
            />
                    <Button text={text} setErrmssg={setErrmssg} />
        </li>
        </ul>
    </div>
    );
    }

export default Login