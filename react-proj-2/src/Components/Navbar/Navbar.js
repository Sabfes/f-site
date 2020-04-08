import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='Navbar'> 
            <NavLink className='Navbar__link' to='/Profile'>Profile</NavLink>
            <NavLink className='Navbar__link' to='/Messages'>Messages</NavLink>
            <NavLink className='Navbar__link' to='/News'>News</NavLink>
            <NavLink className='Navbar__link' to='/Music'>Music</NavLink>
            <NavLink className='Navbar__link' to='/Settings'>Settings</NavLink>
        </nav>
    )
}

export default Navbar;