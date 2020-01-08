import React from 'react';
import Proptypes from 'prop-types';

import './Walks.scss';
import walkShape from '../../helpers/propz/walkShape';

class Walks extends React.Component {
  static propTypes = {
    walks: walkShape.walkShape,
    deleteWalk: Proptypes.func,
  }

  deleteWalkEvent = (e) => {
    e.preventDefault();
    const { deleteWalk, walk } = this.props;
    deleteWalk(walk.id);
  }

  render() {
    const { walk, dogs, employees } = this.props;
    const foundDog = dogs.find((x) => x.id === walk.dogId);
    const foundEmployee = employees.find((y) => y.id === walk.employeeId);

    return (
      <div className="col-6 d-flex">
        <div className="card mb-3 text-center">
          <div className="card-body backGround rounded-lg">
            <h5 className="card-title title">{foundDog.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Date: {walk.date}</h6>
              <p className="card-text walker">Walker: {foundEmployee.firstName} {foundEmployee.lastName}</p>
              <button className="btn btn-outline-danger mr-3" onClick={this.deleteWalkEvent}>Delete</button>
              <button className="btn btn-outline-primary">Edit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Walks;
