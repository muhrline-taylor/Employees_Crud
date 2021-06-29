import React, { useEffect, useState } from 'react'
import "../static/css/EmployeeList.css";
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';

function EmployeeList({  }) {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        EmployeeService.getAllEmployees()
            .then(res => {
                setEmployees(res.data)
            })
    },[employees])


    return (
        <div className="employeeList">
            <h1>EmployeeList.jsx</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        employees.length > 0 ?
                        employees.map((employee, k) => (
                            <tr>
                                <td className="employeeList__tableEntry">
                                    <Link to={`/employees/${employee.id}`}>
                                        {employee.id}
                                    </Link>
                                </td>
                                <td className="employeeList__tableEntry">{employee.firstName}</td>
                                <td className="employeeList__tableEntry">{employee.lastName}</td>
                                <td className="employeeList__tableEntry">{employee.email}</td>
                                <td className="employeeList__tableEntry">

                                    <Link 
                                        to={`${employee.id}/edit`}
                                        className="employeeList__tableEntryLink"
                                    >
                                        Edit
                                    </Link>

                                    <Link 
                                        to={`${employee.id}/delete`}
                                        className="employeeList__tableEntryLink"
                                    >
                                        Delete
                                    </Link>

                                </td>
                            </tr>
                        ))
                        :""
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList
