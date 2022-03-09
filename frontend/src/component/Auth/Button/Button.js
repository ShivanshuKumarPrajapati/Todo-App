import React from 'react'

import './Button.css';

function Button({text}) {
    return (
        <div className='BtnContainer'>
            <button className='btn '>{text}</button>
        <div className='hrDiv'>
  <span className='hrText'>
    OR
        </span>
        </div>
        <button className='btn'>{`${text} with Google`}</button>
        </div>
    )
}

export default Button