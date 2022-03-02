import React from 'react'
import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from 'react';

import './CreateNote.css';

function CreateNote({addItem,setAlert}) {

    const [todo, setTodo] = useState({ title: "", note: "" });

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;

        setTodo({...todo,[key]:value})
    }

    const handleClick = (e) => {
        const newTodo = { ...todo, id: new Date().getTime().toString() };
        if (newTodo.note && newTodo.title) {
            addItem(newTodo);
            setAlert(1);
        }
        else
            setAlert(0);
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