import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AddEmployeeForm from "./components/AddEmployeeForm";
import EmployeeList from "./components/EmployeeList";
import "./App.css"; // Import the CSS file

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="nav-bar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Welcome
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/list" className="nav-link">
                Employee List
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/list" element={<EmployeeList />} />
          <Route path="/" element={<AddEmployeeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
