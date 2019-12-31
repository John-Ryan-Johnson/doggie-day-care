import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import dogsData from '../helpers/data/dogsData';
import DogPen from '../components/DogPen/DogPen';

import employeesData from '../helpers/data/employeesData';
import StaffRoom from '../components/StaffRoom/StaffRoom';

class App extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  componentDidMount() {
    const dogs = dogsData.getAllDogs();
    this.setState({ dogs });
    const employees = employeesData.getAllEmployees();
    this.setState({ employees });
  }

  render() {
    return (
      <div className="App">
        <h3 className="staff">Kennel Staff</h3>
        <StaffRoom employees={this.state.employees}/>
        <h3 className="babies mt-5 mb-3">Kennel Babies</h3>
        <DogPen dogs={this.state.dogs}/>
      </div>
    );
  }
}

export default App;
