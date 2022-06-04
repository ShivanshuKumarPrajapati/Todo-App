import React, { useEffect } from 'react'
import { useState,useRef } from 'react';
import './Header.css'
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import axios from "axios";

const getUsername = () => {
  const name = sessionStorage.getItem("token")
  const user = JSON.parse(name).username;
  return user;
}


function Header() {

  const [detail, setDetail] = useState(false);
  const [username, setUsername] = useState(getUsername());
  const detailContainerRef = useRef(null);
  const paraHeight = useRef(null);
  const btnHeight = useRef(null);

  const navigate = useNavigate();

  const showDetail = () => {
    setDetail(!detail);
  }

  const handleLogout = () => {
    axios
      .get("http://localhost:5000/logout/")
      .then((res) => {
        console.log(res);
        sessionStorage.removeItem("token");
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    const height =
      paraHeight.current.getBoundingClientRect().height +
      btnHeight.current.getBoundingClientRect().height +25; 
  
    if (!detail) {
      detailContainerRef.current.style.height = `0px`;
      detailContainerRef.current.style.border='0px';
    }
    else {
      detailContainerRef.current.style.height = `${height}px`;
      detailContainerRef.current.style.border = `2px solid white`;
    }
  }, [detail])
  
  return (
    <div className="header">
      <h1 className="heading">Todo App</h1>
      <div className='headerChild'>
        <button className={`userBtn`} onClick={showDetail}>
          <FaRegUser size={25} className="userIcon" />
        </button>
        <div className="userDetail" ref={detailContainerRef}>
          <p className="userPara" ref={paraHeight}>
            Signed in as <br/>{username}
          </p>
          <button
            className="logoutBtn"
            ref={btnHeight}
            onClick={() => handleLogout()}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header