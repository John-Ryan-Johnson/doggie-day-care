import './Walks.scss';
import React from 'react';

import PropTypes from 'prop-types';
import walkShape from '../../helpers/propz/walkShape';

import employeesData from '../../helpers/data/employeesData';
import dogsData from '../../helpers/data/dogsData';

class Walks extends React.Component {
  static propTypes = {
    walk: walkShape.walkShape,
    cancelWalk: PropTypes.func,
    changeEditMode: PropTypes.func,
    setWalkToEdit: PropTypes.func,
  }

  state = {
    employeeFirstName: '',
    employeeLastName: '',
    dogName: '',
  }

  cancelWalkEvent = (e) => {
    e.preventDefault();
    const { walk, cancelWalk } = this.props;
    cancelWalk(walk.id);
  }

  setEditMode = (e) => {
    const { changeEditMode, setWalkToEdit, walk } = this.props;
    e.preventDefault();
    changeEditMode(true);
    setWalkToEdit(walk);
  }

  getSingleEmployee = () => {
    const { walk } = this.props;
    employeesData.getSingleEmployee(walk.employeeId)
      .then((response) => {
        this.setState({ firstName: response.data.firstName, lastName: response.data.lastName });
      })
      .catch((error) => console.error(error));
  }

  getSingleDog = () => {
    const { walk } = this.props;
    dogsData.getSingleDog(walk.dogId)
      .then((response) => {
        this.setState({ dogName: response.data.name });
      })
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.getSingleDog();
    this.getSingleEmployee();
  }

  render() {
    const { walk } = this.props;
    const { firstName, lastName, dogName } = this.state;

    return (
      <div className='Walks p-2 m-3 text-center'>
        <p>Dog: {dogName}</p>
    <p>Walker: {firstName} {lastName}</p>
        <p>{walk.date}</p>
        <button className='btn btn-outline-danger' onClick={this.cancelWalkEvent}>Delete</button>
        <button className='btn btn-outline-primary ml-3' onClick={this.setEditMode}>Edit</button>
      </div>
    );
  }
}

export default Walks;
