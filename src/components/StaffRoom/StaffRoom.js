import React from 'react';
import PropTypes from 'prop-types';
import Employee from '../Employee/Employee';
import employeeShape from '../../helpers/propz/employeeShape';

class StaffRoom extends React.Component {
  static propTypes = {
    allEmployees: PropTypes.arrayOf(employeeShape.employeeShape),
  }

  render() {
    const { allEmployees } = this.props;
    return (
      <div className="StaffRoom">
        <h1 className="text-center text-white mt-3 mb-3">Our Staff</h1>
        <div className="row justify-content-center">
          {
            allEmployees.map((employee) => <Employee key={employee.id} employee={employee} />)
          }
        </div>
      </div>
    );
  }
}

export default StaffRoom;
