import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EmployeeList.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [salaryFilter, setSalaryFilter] = useState('');

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:8080/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  const handleNameFilterChange = (e) => {
    setNameFilter(e.target.value);
  };

  const handleSalaryFilterChange = (e) => {
    setSalaryFilter(e.target.value);
  };

  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      employee.salary.toString().includes(salaryFilter)
    );
  });

  return (
    <div className="employee-list-container">
      <h2>Employee List</h2>
      <div className="filters">
        <label>Name Filter:</label>
        <input type="text" value={nameFilter} onChange={handleNameFilterChange} />
        <label>Salary Filter:</label>
        <input type="text" value={salaryFilter} onChange={handleSalaryFilterChange} />
      </div>
      <ul className="employee-list">
        {filteredEmployees.map((employee) => (
          <li key={employee.employee_id}>
            {employee.name} - {employee.position} - ${employee.salary}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
