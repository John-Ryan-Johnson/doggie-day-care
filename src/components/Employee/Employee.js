import React from 'react';
import employeeShape from '../../helpers/propz/employeeShape';

class Employee extends React.Component {
  static propTypes = {
    employee: employeeShape.employeeShape,
  }

  render() {
    const { employee } = this.props;
    return (

      <div className="col-4">
        <div className="card mt-3 mb-3">
          <div className="card-body">
            <h5 className="card-title">{employee.firstName} {employee.lastName}</h5>
            <p className="card-text">Phone Number: {employee.phoneNumber}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Employee;
