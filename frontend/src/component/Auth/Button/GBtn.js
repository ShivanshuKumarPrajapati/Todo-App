import React, { useState } from 'react'
import { useEffect, useRef } from 'react';
import { GoogleLogin } from 'react-google-login'
import { useNavigate } from 'react-router-dom';
import {gapi} from 'gapi-script'

import useToken from "./../../../useToken";
import axios from 'axios';

function GLogin({ text, setErrmssg }) {

    
    const { setToken, token } = useToken();
    const navigate = useNavigate();
    const [loading, setLoading] = useState('loading....');
    const target = useRef(null);

    const onFailure = (result) => {
        console.log(result);
        setErrmssg('Unable to connect.Try using different account');
    }
    
    const onSuccess = (googleData) => {
        
        console.log(googleData);

        const body = {
            googleId: googleData.googleId,
            username: googleData.profileObj.email,
        };
        axios
            .post("http://localhost:5000/auth/google/home", body)
            .then((res) => {
                console.log(res.data);
                setToken(res.data);
                navigate('/home/')
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        function init() {
            gapi.load("auth2", function () {
                const auth2 = gapi.auth2.init({
                    client_id: process.env.REACT_APP_CLIENT_ID,
                    cookiePolicy: 'single_host_origin',
                    scope:'profile email'
                });
                auth2.attachClickHandler(target, {}, onSuccess, onFailure);
            });

            
        }
            init();
    })

    return (
        <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText={`${text} with Google`}
            render={(renderProps) => (
            <button onClick={renderProps.onClick} >google bitton
            </button>
        )}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
            isSignedIn={true}
            type='submit'
        autoLoad={false}
        ref={target}
        />
    );
}

export default GLogin