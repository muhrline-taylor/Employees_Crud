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



    // MISC

    validateEmail(email){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    validateNewEmployee(reqBody){
        console.log("into validateNewEmployee")
        console.log(reqBody)
        console.log(this.validateEmail(reqBody.email))
        if(this.validateEmail(reqBody.email) === true){
            if(reqBody.firstName !== "" && reqBody.lastName !== ""){
                console.log("valid form")
                this.createEmployee(reqBody)
            }
        }
    }

    goToEdit(id){
        navigate("/edit")
    }
}

export default new EmployeeService();