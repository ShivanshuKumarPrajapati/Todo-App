import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Auth.css';

import axios from 'axios';

import Header from './Header/Header'
import Form from './Form/Form'
import Button from './Button/Button.js'


function Login() {
    const [text, setText] = useState("Login");
    const [flag, setFlag] = useState(1);

    const navigate = useNavigate();

    useEffect(() => {
        axios
        .get("http://localhost:5000/", { crossdomain: true })
        .then((res) => {
            if (res.data === 1) {
                navigate('/home/') 
            } else {
            console.log(res);
            }
        })
        .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        if (flag === 1) setText("Login");
        else setText("Sign up");
    }, [flag]);

    return (
        <div className="Page">
        <ul className="auth">
            <li>
            <Header flag={flag} setFlag={setFlag} />
            <Form flag={flag} setFlag={setFlag} />
            <Button text={text} />
            </li>
        </ul>
        </div>
    );
    }

export default Login