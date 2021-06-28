import { navigate } from '@reach/router';
import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import "../static/css/ViewEmployee.css";
import { useHistory, Link } from 'react-router-dom';



function ViewEmployee({ ...props }) {
    const [thisEmployee, setThisEmployee] = useState({})

    useEffect(() => {
        EmployeeService.getEmployeeById(props.match.params.id)
            .then(res => {
                setThisEmployee(res.data)
            })
    },[])

    return (
        <div className="viewEmployee">
            <div className="viewEmployeeCard">
                <div className="viewEmployeeCard__body">
                    <h2>{thisEmployee.firstName} {thisEmployee.lastName}: {thisEmployee.email}</h2>
                </div>
                
                <div className="viewEmployeeCard__buttonContainer">
                    <Link
                        to={`${thisEmployee.id}/edit`}
                        className="viewEmployeeCard__button"
                        style={{
                            backgroundColor: "rgba(0, 255, 221, 0.5)",
                        }}
                    >
                        <p>Edit</p>
                    </Link>
                    <Link 
                        to={`${thisEmployee.id}/delete`}
                        className="viewEmployeeCard__button"
                        style={{
                            backgroundColor: "rgba(252, 95, 95, 0.973)"
                        }}
                    >
                        <p>Delete</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ViewEmployee
