import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllEmployees = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/employees.json`)
    .then((result) => {
      const allEmpObj = result.data;
      const employees = [];
      if (allEmpObj != null) {
        Object.keys(allEmpObj).forEach((employeeId) => {
          const newEmployee = allEmpObj[employeeId];
          newEmployee.id = employeeId;
          employees.push(newEmployee);
        });
      }
      resolve(employees);
    })
    .catch((error) => reject(error));
});

const getSingleEmployeeById = (employeeId) => axios.get(`${baseUrl}/employees/${employeeId}.json`);

export default { getAllEmployees, getSingleEmployeeById };
