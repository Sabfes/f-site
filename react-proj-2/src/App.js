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

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <Route path='/Profile' component={Profile} />
        <Route path='/Messages' component={Messages} />
        <Route path='/News' component={News} />
        <Route path='/Music' component={Music} />
        <Route path='/Settings' component={Settings} />
      </div>
    </BrowserRouter>
  ) 
}

export default App; 
