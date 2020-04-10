import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <NavLink to='/Profile'><img className='header__img' src='https://www.brd24.com/bitrix/templates/brd24_adapt/images/facebook.svg' alt='as' /></NavLink>
        </header>
    )
}

export default Header;