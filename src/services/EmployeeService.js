import axios from 'axios';
import { navigate } from '@reach/router';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
    // API CALLS GO HERE

    getAllEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    getEmployeeById(id){
        return axios.get(`${EMPLOYEE_API_BASE_URL}/${id}`);
    }

    createEmployee(reqBody){
        return axios.post(`${EMPLOYEE_API_BASE_URL}/new`, reqBody);
    }

    deleteEmployee(id){
        return axios.delete(`${EMPLOYEE_API_BASE_URL}/${id}`);
    }



    // MISC

    validateEmail(email){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    validateNewEmployee(reqBody){
        var errors;
        if(this.validateEmail(reqBody.email) === true){
            if(reqBody.firstName !== "" && reqBody.lastName !== ""){
                this.createEmployee(reqBody)
                errors = "none"
                return errors
            } else {
                errors = "Please enter a valid email"
                return errors
            }
        } else {
            errors = "First and last names must be at least 2 characters each"
            return errors
        }
    }

    goToEdit(id){
        navigate("/edit")
    }
}

export default new EmployeeService();