import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import './Form.css'
import { useNavigate } from 'react-router-dom';


var handleSubmit;
export function handleClick(val,e) {
    handleSubmit(val,e);
}

function Form({flag,setFlag}) {

    const [authData, setAuthData] = useState({ email: '', password: '' })
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setAuthData({...authData,[key]:value})
    }

    handleSubmit = (val, e) => {
            if (flag === 1) {
            if (val == 1) {
                axios
                .post("http://localhost:5000/login", authData)
                    .then((res) => {
                        setAuthData({ email: "", password: "" });
                        if (res.data === 1)
                            navigate('/home/');
                    })
                .catch((err) => {
                    console.log(err);
                    setAuthData({ email: "", password: "" });
                });
            }
            } else {
            axios
                .post("http://localhost:5000/signUp", authData)
                .then((res) => {
                    setAuthData({ email: "", password: "" });
                    if (res.data === 1)
                        navigate('/home/');
                })
                .catch((err) => {
                setAuthData({ email: "", password: "" });
                setFlag(1);
                console.log(err);
                });
        }
            e.preventDefault();
        };
    
    return (
        <form className='authForm'>
            <input className='authInput' type="email" placeholder='Enter email' name='email' value={authData.email} onChange={handleChange} required />
            <input className='authInput' type="password" name="password" placeholder='Password' value={authData.password} onChange={handleChange} />
    </form>
    )
}

export default Form