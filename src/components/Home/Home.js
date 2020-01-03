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
    showWalks: false,
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

  setShowWalks = () => {
    this.setState({ showWalks: true });
  }

  hideShowWalks = () => {
    this.setState({ showWalks: false });
  }

  render() {
    return (
      <div className="App">
        <div className="d-flex justify-content-center" id="dogWalks">
        {
        (this.state.showWalks) ? (<button className="btn btn-danger hide-form mt-3 mb-3" onClick={this.hideShowWalks}>Close</button>)
          : (<button className="btn btn-primary mt-3" onClick={this.setShowWalks}>Walk Schedule</button>)
        }
        </div>
        <div className="d-flex flex-row flex-wrap">
    { this.state.showWalks && this.state.walks.map((walk) => (<Walks key={walk.id} walk={walk} />))}
        </div>
          <div className="d-flex flex-row flex-wrap">
            <div className="col-6">
              <h1 className="text-center">Our Babies</h1>
                  <div className="d-flex flex-wrap flex-row">
                    { this.state.dogs.map((dog) => (<Dog key={dog.id} dog={dog} />))};
                  </div>
            </div>
            <div className="col-6">
              <h1 className="text-center">Our Staff</h1>
                <div className="d-flex flex-wrap flex-row">
                  { this.state.employees.map((employee) => (<Employee key={employee.id} employee={employee} />))}
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
