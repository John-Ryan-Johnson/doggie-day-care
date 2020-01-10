import React from 'react';
import employeeShape from '../../helpers/propz/employeeShape';
import './Employee.scss';

class Employee extends React.Component {
  static propTypes = {
    employee: employeeShape.employeeShape,
  }

  render() {
    const { employee } = this.props;
    return (
      <div className='employeeCard col-3 mb-5 text-center'>
        <h3>{employee.firstName} {employee.lastName}</h3>
        <h5 className="number">{employee.phoneNumber}</h5>
      </div>
    );
  }
}

export default Employee;
