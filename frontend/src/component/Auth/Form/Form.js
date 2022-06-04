import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import './Form.css'
import { useNavigate } from 'react-router-dom';

var handleSubmit;
export function handleClick(val,e) {
    handleSubmit(val,e);
}

function Form({flag,setFlag,childfxn,setToken,setErrmssg}) {

    const [authData, setAuthData] = useState({ email: '', password: '' })
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setAuthData({...authData,[key]:value})
    }

    childfxn.current = () => {
        setAuthData({ username: "", password: "" });
    }
    handleSubmit = (val, e) => {
        if (authData.email !=='' && authData.password !== '') {
        if (flag === 1) {
            if (val === 1) {
                axios
                    .post("http://localhost:5000/login", authData)
                    .then((res) => {
                        setAuthData({ username: "", password: "" });
                        setToken(res.data);
                        navigate('/home/');
                    })
                    .catch((err) => {
                        setAuthData({ username: "", password: "" });
                        navigate('/');
                        console.log(err);
                        setErrmssg('Invalid username or password');
                    });
            }
        } else {
            if (val === 1) {
                axios
                    .post("http://localhost:5000/signUp", authData)
                    .then((res) => {
                        setAuthData({ username: "", password: "" });
                        if (res.status === 200) {
                            setToken(res.data);
                            navigate('/home')
                        }
                    })
                    .catch((error) => {
                        setAuthData({ username: "", password: "" });
                        setFlag(1);
                        console.log(JSON.stringify(error));
                        setErrmssg('User already exist');
                    });
            }
            }
            e.preventDefault();
        }
        else
        {
            setAuthData({ username: '', password: '' })
            setErrmssg('Enter email and password');
            }
            e.preventDefault();
                    
    };
    
    
    return (
        <form className='authForm'>
            <input className='authInput' type="email" placeholder='Enter email' name='username' value={authData.username ?? ''} onChange={handleChange} required />
            <input className='authInput' type="password" name="password" placeholder='Password' value={authData.password ?? ''} onChange={handleChange} />
    </form>
    )
}

export default Form