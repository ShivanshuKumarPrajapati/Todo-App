import { useState } from 'react'

export const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
};

function useToken() {

    const [token, setToken] = useState(getToken());

    
    const saveToken = (userToken) => {
        console.log(userToken);
        sessionStorage.setItem("token", JSON.stringify(userToken));
        setToken(userToken);
    };

    return {
        setToken: saveToken,
        token
    }

}

export default useToken