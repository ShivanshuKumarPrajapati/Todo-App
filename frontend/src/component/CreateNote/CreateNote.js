import React from 'react'
import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from 'react';
import axios from 'axios';

import './CreateNote.css';


var updateData;

export function editContent(item) {
    console.log(item)
    updateData(item);
}

export function  accessToken (){
        const tokenString = sessionStorage.getItem("token");
        const userToken = JSON.parse(tokenString);
        return userToken;
    };

function CreateNote({ addItem, setAlert}) {

    const [todo, setTodo] = useState({ title: "", note: "" });
    const [editFlag, setEditFlag] = useState(0);
    const [updateId, setUpdateId] = useState('');

    

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setTodo({...todo,[key]:value})
    }

    updateData = (item) => {
        console.log(item._id);
        setEditFlag(1);
        setUpdateId(item._id);
        setTodo({ title: item.title, note: item.note });
    }


    const handleClick = (e) => {
        if (todo.note && todo.title && editFlag)
        {
            const config = {
                headers:{token:accessToken().id},
            }
            console.log(updateId);
            const newTodo = { ...todo, id: updateId };
            axios
            .post("http://localhost:5000/home/update", newTodo,config)
                .then((res) => {
                    setAlert(2);
                    console.log(res);
                })
            .catch((err) => console.log(err));
            setEditFlag(0);
            setUpdateId('');
            setTodo({ title: "", note: "" });

        }
        else if (todo.note && todo.title) {
            const newTodo = {
                ...todo,
                id: new Date().getTime().toString()
            };
            addItem(newTodo);
        }
        else {
            setAlert(0);
        }
        setTodo({ title: '', note: '' });
        e.preventDefault();
    }

    return (
        <div className='CreateNote'>
            <form >
                <input type="text" placeholder='Title' className='titleInput' name='title' value={todo.title} onChange={handleChange}/>
                
                <textarea type="text" placeholder='Take a note...' className='noteInput' rows={3} name='note' value={todo.note} onChange={handleChange} />
                <AiFillPlusCircle  className='addBtn' onClick={handleClick} />

            </form>
    </div>
    )
}

export default CreateNote
