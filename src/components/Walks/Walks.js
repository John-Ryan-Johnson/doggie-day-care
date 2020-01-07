import React from 'react';
import './Walks.scss';

class Walks extends React.Component {
  state = {
    walks: [],
  }

  render() {
    const { walk } = this.props;
    return (
      <div className="col-6 d=flex">
        <div className="card mb-3 text-center">
          <div className="card-body backGround rounded-lg">
            <h5 className="card-title title">Dog: {walk.dogId}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Date: {walk.date}</h6>
            <p className="card-text walker">Scheduled Walker: {walk.employeeId}</p>
              <button className="btn btn-outline-danger mr-3">Delete</button>
              <button className="btn btn-outline-primary">Edit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Walks;
