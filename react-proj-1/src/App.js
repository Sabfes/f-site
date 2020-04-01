import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car.js';

class App extends Component {
  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2010},
      {name: 'Mercedes-Benz CLA', year: 2020},
    ],
    titleName: 'Cars',
  }
  render() {
    const cars = this.state.cars;

    return (
      <div className="App">
        <h1>{this.state.titleName}</h1>
        <Car name={cars[0].name} year={cars[0].year} />
        <Car name={cars[1].name} year={cars[1].year} />
        <Car name={cars[2].name} year={cars[2].year} />
        <Car name={cars[3].name} year={cars[3].year} />
      </div>
    )
  };
}

export default App;
