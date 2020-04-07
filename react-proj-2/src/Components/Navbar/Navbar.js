import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='Navbar'> 
            <div><a href='#a'>Profile</a></div>
            <div><a href='#s'>Messages</a></div>
            <div><a href='#sas'>News</a></div>
            <div><a href='#a'>Music</a></div>
            <div><a href='#a'>Settings</a></div>
        </nav>
    )
}

export default Navbar;