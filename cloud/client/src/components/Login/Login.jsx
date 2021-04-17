import React, {useState} from 'react'
import Input from "../Input/Input";
import {login} from "../../actions/user";
import './Login.css'
import {useDispatch} from 'react-redux'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    return (
        <div className={'Login'}>
            <h1>Авторизация</h1>
            <Input
                value={email}
                onChange={setEmail}
                type="text"
                placeholder="Введите email"
            />
            <Input
                value={password}
                onChange={setPassword}
                type="password"
                placeholder="Введите пароль"
            />

            <button
                onClick={() => dispatch(login(email, password))}
                className="Login__button"
            >
                Войти
            </button>
        </div>
    )
}
export default Login
