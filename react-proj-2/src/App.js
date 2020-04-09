import React from 'react'
import './App.css'
import Header from './Components/Header/Header.js'
import Navbar from './Components/Navbar/Navbar.js'
import Profile from './Components/Profile/Profile.js'
import Messages from './Components/Messages/Messages.js'
import Settings from './Components/Settings/Settings.js'
import Music from './Components/Music/Music.js'
import News from './Components/News/News.js'
import { Route, BrowserRouter } from 'react-router-dom'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <Route path='/Profile'><Profile dataBillPost={props.state.dataBillPost} addPost={props.addPost}/></Route>
        <Route path='/Messages'><Messages dataBillMessages={props.state.messagesData} dataBillDialogs={props.state.dialogsData}/></Route>
        <Route path='/News'><News /></Route>
        <Route path='/Music'><Music /></Route>
        <Route path='/Settings'><Settings /></Route>
      </div>
    </BrowserRouter>
  ) 
}

export default App
