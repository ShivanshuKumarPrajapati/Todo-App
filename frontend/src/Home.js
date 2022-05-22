import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { BsCaretDownFill } from "react-icons/bs";


import Header from "./component/header/Header";
import CreateNote from "./component/CreateNote/CreateNote";
import SavedNote from "./component/savedNote/SavedNote";
import { accessToken } from './component/CreateNote/CreateNote';

function Home() {

        const [todoList, setTodoList] = useState([]);
        const [alert, setAlert] = useState(-1);
        const [alertMssg, setAlertMssg] = useState("");
        const [alertClass, setAlertClass] = useState("");

    function addItem(note) {
        const config = {
            headers: { token: accessToken().id }
        };
        axios
            .post("http://localhost:5000/home/add", note,config)
            .then((res) => {
                console.log(res);
                setAlert(1);
            })
            .catch((err) => {
                setAlert(-2);
                setAlertMssg('Error. Try again');
                console.log(err);
            });
        }

        function handleAlertValue() {
        return setInterval(() => {
            setAlert(-1);
        }, 3000);
        }

        useEffect(() => {
            if (alert === 0 ) {
            setAlertMssg("Enter Data");
                setAlertClass("showAlert alertDanger");
                setTimeout(() => {
                    setAlert(-1);
                    setAlertMssg('');
                }, 2000);
        } else if (alert === 1) {
            setAlertMssg("Saved Successfully");
                setAlertClass("showAlert alertSuccess");
                    setTimeout(() => {
                        setAlert(-1);
                        setAlertMssg('');
                    }, 2000);
            }
            else if (alert === -2) {
                setAlertMssg("Server Error. Try again later");
                setAlertClass("showAlert alertDanger");
                setTimeout(() => {
                    setAlert(-1);
                    setAlertMssg('');
                }, 2000);
        }
        let clean = handleAlertValue();
        return () => clearInterval(clean);
        }, [alert]);

    useEffect(() => {
        const config = {
            headers: { token: accessToken().id },
            crossdomain: true,
        };
        axios
            .get("http://localhost:5000/home/", config)
            .then((response) => {
            setTodoList(response.data);
            }).catch(err => {
                setAlert(-2);
                setAlertMssg(err);
            });
        });

    return (
        <div>
            {" "}
            <Header />
            {alert === -1 ? (
            " "
            ) : (
            <p className={`alertMssg ${alertClass}`}>
                {alertMssg} <BsCaretDownFill className="downArrow" />
            </p>
            )}
            <CreateNote addItem={addItem} setAlert={setAlert} />
            {todoList.length === 0 ? "" : <SavedNote todoList={todoList} />}
        </div>
        );
}

export default Home