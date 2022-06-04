import React from 'react'
import { useState } from 'react';
import './Button.css';

import { handleClick } from "../Form/Form";
import GBtn from './GBtn';
import GoogleLogin from 'react-google-login';

function Button({ text }) {
    
    
    const [trigger, setTrigger] = useState(false);

    return (
        <div className="BtnContainer">
            <button className="btn " onClick={(e) => handleClick(1, e)}>
            {text}
            </button>
            <div className="hrDiv">
            <span className="hrText">OR</span>
            </div>
            {/* {trigger ? (
                    <GoogleLogin clientId={process.env.REACT_APP_CLIENT_ID}
            buttonText={`${text} with google`}      />
            ) : ( */}
            <GBtn
                text={text}
                className="Btn"
                onClick={() => setTrigger(!trigger)}
            />
            {/* )} */}
        </div>
    );
}

export default Button