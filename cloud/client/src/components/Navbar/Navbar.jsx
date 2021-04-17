import React from 'react'
import './Navbar.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/userReducer";

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    return (
        <div className="navbar">
            <div className="navbar__header">
                <img src="" alt="" className="navbar__logo"/>
                <span>Mern cloud</span>
            </div>

            <div className="navbar__buttons">
                {!isAuth && <button className="navbar__button"><NavLink to={'/login'}>Войти</NavLink></button>}
                {!isAuth && <button className="navbar__button"><NavLink to={'/registration'}>Регистрация</NavLink></button>}
                {isAuth && <button onClick={() => dispatch(logout())} className="navbar__button">Выйти</button>}
            </div>
        </div>
    )
}

export default Navbar
