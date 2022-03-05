import React from 'react'
import Note from './noteList'
import './SavedNote.css';

function SavedNote({ todoList,editContent }) {
  
  return (
    <div>
      <ul className="tilesWrap">
        {
          todoList.map(item => {
            return (
              <li key={item.id}>
                <Note item={item} editContent={editContent}/>
              </li>
            );
          })
        }
        
      </ul>
    </div>
  );
}

export default SavedNote