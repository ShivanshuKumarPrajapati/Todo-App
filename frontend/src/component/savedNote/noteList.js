import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from 'axios';

import './SavedNote.css'

import { editContent } from '../CreateNote/CreateNote';

function noteList({ item }) {
    
    const delContent = (id) => {
        axios.delete('http://localhost:5000/home/' + id)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }
    
    return (
        <div>
            <div className="button">
            <FaEdit className="editIcon" onClick={() => editContent(item)} />
            <FaTrash className="trashIcon" onClick={()=> delContent(item.id)}/>
            </div>
            <h1>{item.title}</h1>
            <p className="notePara">{item.note}</p>
        </div>
    );
}

export default noteList