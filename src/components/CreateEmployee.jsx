import React, { Component } from 'react'

class CreateEmployee extends Component {
    constructor(props){
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            emailId: ""
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    onChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    saveEmployee = e => {
        e.preventDefault();

        let employee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId,
        }
        console.log('employee: ' + JSON.stringify(employee));
    }

    cancel = e => {
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> First Name </label>
                                        <input 
                                            placeholder="First Name"
                                            name="firstName"
                                            className="form-control"
                                            value={this.state.firstName}
                                            onChange={this.onChangeHandler}
                                        />
                                        <label> Last Name </label>
                                        <input 
                                            placeholder="Last Name"
                                            name="lastName"
                                            className="form-control"
                                            value={this.state.lastName}
                                            onChange={this.onChangeHandler}
                                        />
                                        <label> Email </label>
                                        <input 
                                            placeholder="Email"
                                            name="emailId"
                                            className="form-control"
                                            value={this.state.emailId}
                                            onChange={this.onChangeHandler}
                                        />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateEmployee;
