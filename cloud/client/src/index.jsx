import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import {store} from './reducers'
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
