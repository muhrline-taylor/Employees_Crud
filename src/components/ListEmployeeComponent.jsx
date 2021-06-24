import React, { Component, useEffect } from 'react'
import EmployeeService from '../services/EmployeeService'

export default class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state={
            employees: [],
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    componentDidUpdate(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }

    addEmployee(){
        // pushing into history like this works similar to a redirect
        this.props.history.push('/add-employee');
    }

    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`);
    }

    deleteEmployee(id){
        this.props.history.push(`/delete-employee/${id}`);
    }

    render() {
        return (
            <div>
                <h1>Employee List</h1>
                <div className="row">
                    <button className="btn btn-primary" style={{ 'width':'10%' }} onClick={this.addEmployee}>Add Employee</button>
                </div>

                <div className="row" style={{'margin': '0 1% 0 1%'}}>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(employee => (
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <button 
                                                className="btn btn-info"
                                                onClick={() => this.editEmployee(employee.id)}
                                                style={{ width: '40%', marginRight: '5%' }}
                                            >   
                                                Update
                                            </button>
                                            <button 
                                                className="btn btn-danger" 
                                                onClick={() => this.deleteEmployee(employee.id)}
                                                style={{ width: '40%', marginLeft: '10%' }}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                        
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

