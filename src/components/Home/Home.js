import React from 'react';

import firebase from 'firebase/app';

import firebaseConnection from '../../helpers/data/connection';
import Auth from '../Auth/Auth';
import MyNavbar from '../MyNavbar/MyNavbar';
import employeesData from '../../helpers/data/employeesData';
import dogsData from '../../helpers/data/dogsData';
import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';


firebaseConnection.firebaseApp();

class Home extends React.Component {
  state = {
    authed: false,
    employees: [],
    dogs: [],
  }

  getEmployees = () => {
    employeesData.getAllEmployees()
      .then((employees) => {
        this.setState({ employees });
      })
      .catch((errFromGetEmployees) => console.error(errFromGetEmployees));
  }

  getDogs = () => {
    dogsData.getAllDogs()
      .then((dogs) => {
        this.setState({ dogs });
      })
      .catch((errFromGetDogs) => console.error(errFromGetDogs));
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
    this.getEmployees();
    this.getDogs();
  }

  componentWillUnmount() {
    this.removeListener();
  }

  renderView = () => {
    const { authed, employees, dogs } = this.state;
    if (!authed) {
      return (<Auth />);
    }
    return (
      <div>
        <StaffRoom employees={employees}/>
        <DogPen dogs={dogs}/>
      </div>);
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="Home">
        <MyNavbar authed={authed} />
        {
          this.renderView()
        }
    </div>
    );
  }
}

export default Home;
