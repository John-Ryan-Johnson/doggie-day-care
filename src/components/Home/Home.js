import React from 'react';
import dogsData from '../../helpers/data/dogsData';
import Dog from '../Dog/Dog';
import Walks from '../Walks/Walks';
import Employee from '../Employee/Employee';
import employeesData from '../../helpers/data/employeesData';
import walksData from '../../helpers/data/walksData';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
    walks: [],
  }

  componentDidMount() {
    this.getDogs();
    this.getEmployees();
    this.getWalks();
  }

  getDogs = () => {
    dogsData.getAllDogs()
      .then((dogs) => {
        this.setState({ dogs });
      })
      .catch((errorFromGetDogs) => console.error(errorFromGetDogs));
  }

  getEmployees = () => {
    employeesData.getAllEmployees()
      .then((employees) => {
        this.setState({ employees });
      })
      .catch((errorFromGetEmp) => console.error(errorFromGetEmp));
  }

  getWalks = () => {
    walksData.getAllWalks()
      .then((walks) => {
        this.setState({ walks });
      })
      .catch((errorFromGetWalks) => console.error(errorFromGetWalks));
  }

  render() {
    return (
      <div className="Home">
        <div className="d-flex flex-wrap flex-row">
          <div className="col-6">
            <h1 className="text-center text-white mt-3 mb-3">Our Babies</h1>
              <div className="d-flex flex-wrap flex-row">
                { this.state.dogs.map((dog) => (<Dog key={dog.id} dog={dog} />))};
              </div>
          </div>
          <div className="col-6">
            <h1 className="text-center text-white mt-3 mb-3">Our Staff</h1>
              <div className="d-flex flex-wrap flex-row">
                { this.state.employees.map((employee) => (<Employee key={employee.id} employee={employee} />))};
              </div>
          </div>
          <div className="col-6">
            <h1 className="text-center text-white mt-3 mb-3">Walk Schedule</h1>
              <div className="d-flex flex-wrap flex-row">
                { this.state.walks.map((walk) => (<Walks key={walk.id} walk={walk} dogs={this.state.dogs} employees={this.state.employees} />))};
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
