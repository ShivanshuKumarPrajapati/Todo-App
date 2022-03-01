import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";

function noteList() {
    return (
        <div>
            <div className="button">
            <FaEdit className="editIcon" />
            <FaTrash className="trashIcon" />
            </div>
            <h1>hello</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
            deleniti magni nesciunt iste tempore minima sint illum!
            Necessitatibus, consequatur accusamus.
            </p>
        </div>
    );
}

export default noteList