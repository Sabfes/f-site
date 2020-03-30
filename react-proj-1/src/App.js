import React from 'react';
import './App.css';
import Car from './Car/Car.js';

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      
      <Car name={'Ford'} year={2018} />
      <Car name={'Audi'} year={2016} />
      <Car name={'Mazda'} year={2010} />
    </div>
  );

  // return React.createElement(
  //   'div',
  //   {
  //     className: 'App',
  //   },
  //   React.createElement(
  //     'h1',
  //     null,
  //     'Hello world!'
  //   )
  // )

}

export default App;
