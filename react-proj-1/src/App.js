import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car.js';

class App extends Component {
  state = {
    divStyle: {
      textAlign: 'center',
    },

    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2010},
      {name: 'Mercedes-Benz CLA', year: 2020},
    ],
    pageTitle: 'Cars',
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle,
    })
  }

  render() {
    const cars = this.state.cars;

    return (
      <div className="App" style={this.state.divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.changeTitleHandler.bind(this, 'Changed')}>Change title</button>

        <Car 
          name={cars[1].name} 
          year={cars[1].year} 
          onChangeTitle={this.changeTitleHandler.bind(this, cars[1].name)} />
        <Car 
          name={cars[2].name} 
          year={cars[2].year} 
          onChangeTitle={this.changeTitleHandler.bind(this, cars[2].name)} />
        <Car 
          name={cars[3].name} 
          year={cars[3].year} 
          onChangeTitle={this.changeTitleHandler.bind(this, cars[3].name)} />
      </div>
    )
  };
}

export default App;
