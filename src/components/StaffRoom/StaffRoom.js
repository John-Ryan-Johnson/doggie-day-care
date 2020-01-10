import './StaffRoom.scss';
import React from 'react';
import PropTypes from 'prop-types';
import employeeShape from '../../helpers/propz/employeeShape';
import Employee from '../Employee/Employee';

class StaffRoom extends React.Component {
  static propTypes = {
    allStaff: PropTypes.arrayOf(employeeShape.employeeShape),
  }

  render() {
    const { allStaff } = this.props;

    const printEmployees = allStaff.map((employee) => <Employee key={employee.id} employee={employee} />);
    return (
      <div id='staffRoom'>
        <h2 className="title text-center text-white mb-3">Our Staff</h2>
        <div className='row d-flex flex-wrap justify-content-around'>
          {printEmployees}
        </div>
      </div>
    );
  }
}

export default StaffRoom;
