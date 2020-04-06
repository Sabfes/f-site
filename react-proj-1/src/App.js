import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car.js';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cars: [
        {name: 'Ford', year: 2018},
        // {name: 'Audi', year: 2016},
        // {name: 'Mazda', year: 2010},
      ],
      pageTitle: 'React component',
      showCars: false,
    };
  }
  // Показ карточек
  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars,
    })
  };
  // Удаление карты машины
  deleteHandler(index) {
    const carsArr = this.state.cars;
    delete carsArr[index];
    this.setState({
      cars: carsArr,
    })
  }
  // Обновление имени машины
  onChangeName = (name, index) => {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars: cars,
    })
  }
  componentWillMount() {
    console.log('app componentWillMount')
  }
  componentDidMount() {
    console.log('app componentDidMount')
  }
  // Рендер
  render() {
    console.log('app render')
    return (
      <div className="App">
        {/* <h1>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>

        <button onClick={this.toggleCarsHandler}>Toggle cars</button>

        <div className='carCard'>
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
        </div>
      </div>
    )
  };
}

export default App;
