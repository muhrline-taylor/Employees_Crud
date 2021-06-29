import React, { useState, useEffect } from 'react'
import "../static/css/AddEmployee.css";
import EmployeeService from '../services/EmployeeService';
import { useHistory } from 'react-router-dom';

function EditEmployee({ ...props }) {
    const [editEmployeeForm, setEditEmployeeForm] = useState({});
    const [errors, setErrors] = useState("")
    const history = useHistory();

    const changeHandler = e => {
        setEditEmployeeForm({
            ...editEmployeeForm,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        var rawErrors = EmployeeService.validateNewEmployee(editEmployeeForm)
        if(rawErrors !== "none"){
            setErrors({
                ...errors,
                rawErrors
            })
        } else {
            history.push("../")
        }
    }

    useEffect(() => {
        EmployeeService.getEmployeeById(props.match.params.id)
            .then(res => {
                setEditEmployeeForm(res.data)
            })
    },[])



    return (
        <div className="addEmployee">
            <form>
                <div className="addEmployeeHeader">
                    <h1>Create Employee</h1>
                    {
                        errors.rawErrors ?
                        <p style={{
                            color: 'red'
                        }}>{errors.rawErrors}</p>
                        :""
                    }
                    
                    <p></p>
                </div>
                
                <div className="addEmployeeBody">

                    
                    <input 
                        className="addEmployeeBody__input"
                        name="firstName"
                        placeholder="First Name..."
                        value={editEmployeeForm.firstName}
                        onChange={changeHandler}
                    />

                    <input 
                        className="addEmployeeBody__input"
                        name="lastName"
                        placeholder="Last Name..."
                        value={editEmployeeForm.lastName}
                        onChange={changeHandler}
                    />

                    <input 
                        className="addEmployeeBody__input"
                        name="email"
                        placeholder="Email..."
                        value={editEmployeeForm.email}
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

export default EditEmployee
