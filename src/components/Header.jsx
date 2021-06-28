import React from 'react'
import "../static/css/Header.css";
import EmployeeService from '../services/EmployeeService';
import { navigate } from '@reach/router';
import { Link } from 'react-router-dom';

function Header({  }) {
    return (
        <div className="header">
            <a href="http://localhost:3000/">Employee CRUD System</a>
            
                <Link to="/employees/new" className="header__addEmployee"><h2>Add Employee</h2></Link>
            
                <Link to="/employees/" className="header__addEmployee"><h2>View Employees</h2></Link>
        </div>
    )
}

export default Header
