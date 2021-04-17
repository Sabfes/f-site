import React, {useState} from 'react'
import './Registration.css'
import Input from "../Input/Input";
import {registration} from "../../actions/user";

const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className={'registration'}>
            <h1>Регистрация</h1>
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
                onClick={() => registration(email, password)}
                className="registration__button"
            >
                Зарегистрироваться
            </button>
        </div>
    )
}
export default Registration
