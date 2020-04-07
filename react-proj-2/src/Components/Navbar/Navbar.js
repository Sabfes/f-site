import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='Navbar'> 
            <a className='Navbar__link' href='/profile'>Profile</a>
            <a className='Navbar__link' href='/Messages'>Messages</a>
            <a className='Navbar__link' href='/News'>News</a>
            <a className='Navbar__link' href='/Music'>Music</a>
            <a className='Navbar__link' href='/Settings'>Settings</a>
        </nav>
    )
}

export default Navbar;