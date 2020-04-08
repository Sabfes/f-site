import React from 'react'
import { NavLink } from 'react-router-dom'
import './Dialog.css'

const Dialog = (props) => {
    return (
        <div>
            <NavLink className='Messages__dialog' to={props.link}>{props.dialogName}</NavLink>
        </div>
    )
}

export default Dialog