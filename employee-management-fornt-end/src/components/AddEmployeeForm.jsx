import React, { useState } from "react";
import axios from "axios";
import "./AddEmployeeForm.css";

const AddEmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    salary: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/employees", formData);
      alert("Employee added successfully!");
      setFormData({ name: "", position: "", salary: "" });
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <div className="welcome-container">
      <h2>Welcome to Employee Management</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label>Position:</label>
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
        />
        <label>Salary:</label>
        <input
          type="number"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployeeForm;
