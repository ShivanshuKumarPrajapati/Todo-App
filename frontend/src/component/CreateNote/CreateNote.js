import React from 'react'
import { AiFillPlusCircle } from "react-icons/ai";

import './CreateNote.css';

function CreateNote() {

    const handleClick = () => {
        console.log("hello");
    }
    return (
        <div className='CreateNote'>
            <form >
                <input type="text" placeholder='Title' className='titleInput' />
                
                <textarea type="text" placeholder='Take a note...'className='noteInput' rows={3}/>
                <AiFillPlusCircle  className='addBtn' onClick={handleClick} />

            </form>
    </div>
    )
}

export default CreateNote