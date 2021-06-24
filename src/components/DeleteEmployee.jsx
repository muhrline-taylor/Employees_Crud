import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class DeleteEmployee extends Component {
    constructor(props){
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            emailId: ""
        }

        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.props.match.params.id)
            .then(res => {
                let employee = res.data;
                this.setState({
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId: employee.emailId
                })
            })

    }

    deleteEmployee(id){
        console.log('into deleteEmployee(id)')
        EmployeeService.deleteEmployee(id);
        this.props.history.push('/')
    }


    render() {
        return (
            <div>
                <h1>Delete This Employee?</h1>
                <p>First Name: {this.state.firstName}</p>
                <p>Last Name: {this.state.lastName}</p>
                <p>Email: {this.state.emailId}</p>

                <button
                    className="btn btn-danger"
                    onClick={() => this.deleteEmployee(this.props.match.params.id)}
                >
                    Delete
                </button>

                <button
                    className="btn btn-primary"
                    onClick={() => this.props.history.push('/')}
                >
                    Cancel
                </button>

            </div>
        )
    }
}
