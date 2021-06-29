import React, { useState, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function DeleteEmployee({ ...props }) {
    const [employee, setEmployee] = useState({});
    const history = useHistory();

    const clickHandler = () => {
        EmployeeService.deleteEmployee(props.match.params.id);
        history.push("../");
    }
    
    useEffect(() => {
        EmployeeService.getEmployeeById(props.match.params.id)
        .then(res => {
            setEmployee(res.data);
        })
    })
    
    return (
        <div className="deleteEmployee">
            <h1>Delete Employee: {employee.firstName} {employee.lastName}?</h1>
            <Button
                variant="contained"
                color="secondary"
                onClick={clickHandler}
            >
                Delete
            </Button>

            <Button
                variant="contained"
                color="primary"
                onClick={() => history.push("/employees")}
            >
                Cancel
            </Button>
            
        </div>
    )
}

export default DeleteEmployee;
