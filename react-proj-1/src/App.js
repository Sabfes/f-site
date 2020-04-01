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
    pageTitle: 'React component',
    showCars: false,
  };
  //
  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars,
    })
  };
  //
  deleteHandler(index) {
    const carsArr = this.state.cars;
    delete carsArr[index];
    this.setState({
      cars: carsArr,
    })
  }
  //
  onChangeName = (name, index) => {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars: cars,
    })
  }
  // Рендер
  render() {
    return (
      <div className="App" style={this.state.divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.toggleCarsHandler}>Toggle cars</button>

        { 
          this.state.showCars 
            ? this.state.cars.map( (car, index)=> {
              return (
                <Car 
                  key={index}
                  name={car.name} 
                  year={car.year} 
                  onDelete={this.deleteHandler.bind(this, index)} 
                  onChangeName={ event => {this.onChangeName(event.target.value, index)} } />
              )
            })
            : null
        }

        {/* <Car 
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
          onChangeTitle={this.changeTitleHandler.bind(this, cars[3].name)} /> */}
      </div>
    )
  };
}

export default App;
