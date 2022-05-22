import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import './Form.css'
import { useNavigate } from 'react-router-dom';


var handleSubmit;
export function handleClick(val,e) {
    handleSubmit(val,e);
}

function Form({flag,setFlag,childfxn,setToken}) {

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
            if (flag === 1) {
            if (val === 1) {
                axios
                .post("http://localhost:5000/login", authData)
                    .then((res) => {
                        setAuthData({ username: "", password: "" });
                        if (res.data === 1)
                            navigate('/home/');
                    })
                .catch((err) => {
                    console.log(err);
                    setAuthData({username: "", password: "" });
                });
            }
            } else {
            axios
                .post("http://localhost:5000/signUp", authData)
                .then((res) => {
                    setAuthData({ username: "", password: "" });
                    if (res.status === 200) {
                        setToken(res.data);
                        navigate('/home')
                    }
                })
                .catch((err) => {
                setAuthData({ username: "", password: "" });
                setFlag(1);
                console.log(err);
                });
        }
            e.preventDefault();
    };
    
    
    return (
        <form className='authForm'>
            <input className='authInput' type="email" placeholder='Enter email' name='username' value={authData.username} onChange={handleChange} required />
            <input className='authInput' type="password" name="password" placeholder='Password' value={authData.password} onChange={handleChange} />
    </form>
    )
}

export default Form