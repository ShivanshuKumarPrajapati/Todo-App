import React from 'react'
import Note from './noteList'
import { FaEdit, FaTrash } from "react-icons/fa";
import './SavedNote.css';

function SavedNote() {
  return (
    <div>
      <ul className="tilesWrap">
        <li>
          <Note />
        </li>
      </ul>
    </div>
  );
}

export default SavedNote