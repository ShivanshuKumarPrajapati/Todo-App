import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";

import './SavedNote.css'

function noteList({ item }) {
    
    return (
        <div>
            <div className="button">
            <FaEdit className="editIcon" />
            <FaTrash className="trashIcon" />
            </div>
            <h1>{item.title}</h1>
            <p className='notePara'>
                {item.note}
            </p>
        </div>
    );
}

export default noteList