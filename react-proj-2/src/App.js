import React from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import Navbar from './Components/Navbar/Navbar.js';
import Profile from './Components/Profile/Profile.js';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>
  ) 
}

export default App; 
