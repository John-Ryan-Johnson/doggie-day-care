import React from 'react';
import employeeShape from '../../helpers/propz/employeeShape';

class Employee extends React.Component {
  static propTypes = {
    employee: employeeShape.employeeShape,
  }

  render() {
    const { employee } = this.props;
    return (

      <div className="col-6 d-flex">
        <div className="card mb-5">
          <div className="card-body text-center">
            <h5 className="card-title">{employee.firstName} {employee.lastName}</h5>
            <p className="card-text">Phone Number: {employee.phoneNumber}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Employee;
