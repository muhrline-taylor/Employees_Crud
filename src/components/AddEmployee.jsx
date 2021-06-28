import React, { useState } from 'react';
import "../static/css/AddEmployee.css";
import EmployeeService from '../services/EmployeeService';

function AddEmployee() {
    const [addEmployeeForm, setAddEmployeeForm] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    const changeHandler = e => {
        setAddEmployeeForm({
            ...addEmployeeForm,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        EmployeeService.validateNewEmployee(addEmployeeForm)
    }

    return (
        <div className="addEmployee">
            <form>
                <div className="addEmployeeHeader">
                    <h1>Create Employee</h1>
                </div>
                
                <div className="addEmployeeBody">

                    <input 
                        className="addEmployeeBody__input"
                        name="firstName"
                        placeholder="First Name..."
                        value={addEmployeeForm.firstName}
                        onChange={changeHandler}
                    />

                    <input 
                        className="addEmployeeBody__input"
                        name="lastName"
                        placeholder="Last Name..."
                        value={addEmployeeForm.lastName}
                        onChange={changeHandler}
                    />

                    <input 
                        className="addEmployeeBody__input"
                        name="email"
                        placeholder="Email..."
                        value={addEmployeeForm.email}
                        onChange={changeHandler}
                    />

                </div>
                

                <div className="addEmployeeFooter">
                    <button 
                        type="submit"
                        onClick={submitHandler}
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddEmployee