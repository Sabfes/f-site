import React, {useEffect} from 'react'
import Navbar from './Navbar/Navbar'
import {Route, Switch} from 'react-router-dom'
import Registration from "./Registration/Registration";
import Main from "./Main/Main";
import Login from "./Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../actions/user";

function App() {
    const isAuth = useSelector( state => state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth())
    }, [])

    return (
        <div>
            <Navbar/>
            <Main>
                {
                    !isAuth &&
                        <Switch>
                            <Route path={'/registration'} component={Registration}/>
                            <Route path={'/login'} component={Login}/>
                        </Switch>
                }
            </Main>
        </div>
    );
}

export default App;
