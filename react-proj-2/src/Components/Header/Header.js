import React from 'react'
import Classes from './Header.module.css'

const Header = () => {
    return (
        <header className={Classes.header}>
            <img className={Classes.header.img} src='https://www.clipartmax.com/png/full/55-554689_file-arizona-coyotes-svg-arizona-coyotes-logo-png.png' alt='as' />
        </header>
    )
}

export default Header;