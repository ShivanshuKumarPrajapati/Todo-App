import React from 'react'
import { useState } from 'react';
import './Header.css'
function Header({flag, setFlag }) {
    
    const handleHeaderClick = (s) => {
        if (s == 1)
        {
            setFlag(1);   
            }
        else
        {
            setFlag(0);
            }
    }
    return (
        <div className="authHeader">
            <h1
            className={`text ${flag === 1 ? "border" : ""} `}
            onClick={() => {
                handleHeaderClick(1);
            }}
            >
            Login
            </h1>
            <h1
            className={`text  ${flag === 0 ? "border" : ""}`}
            onClick={() => {
                handleHeaderClick(0);
            }}
            >
            Sign up
            </h1>
        </div>
    );
}

export default Header