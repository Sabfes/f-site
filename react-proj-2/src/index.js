import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './index.css'
import * as serviceWorker from './serviceWorker'
import store from './redux/state.js'

let rerenderThree = ()=> {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} addPost={store.addPost.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderThree(store.getState);
store.subscribe(rerenderThree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
