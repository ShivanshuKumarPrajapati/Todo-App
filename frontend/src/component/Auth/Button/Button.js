import React from 'react'
import './Button.css';

import { handleClick } from "../Form/Form";


function Button({text}) {
    return (
        <div className='BtnContainer'>
            <button className='btn ' onClick={(e)=> handleClick(1,e)}>{text}</button>
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