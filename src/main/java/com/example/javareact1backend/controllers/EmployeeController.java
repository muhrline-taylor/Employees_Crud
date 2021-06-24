package com.example.javareact1backend.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.javareact1backend.exceptions.ResourceNotFoundException;
import com.example.javareact1backend.models.Employee;
import com.example.javareact1backend.repository.EmployeeRepository;

// CrossOrigin links the Java backend with the React frontend
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	// GET ALL EMPLOYEES
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
	
	// CREATE EMPLOYEE WITH REST API
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	
	// GET EMPLOYEE BY ID
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee ID does not exist: " + id));
		return ResponseEntity.ok(employee);
	}
	
	// UPDATE EMPLOYEE BY ID
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployeeById(@PathVariable Long id, @RequestBody Employee employeeDetails){
		Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee ID does not exist: " + id));
		
		// THIS OPTION DOES NOT WORK BECAUSE JAVA NEEDS TO MUTATE EXISTING EMPLOYEE VARIABLE. 
		// THIS CREATES A NEW ONE AND ATTEMPTS TO OVERWRITE EXISTING ENTRY.
//		Employee updatedEmployee = new Employee(employeeDetails.getId(), employeeDetails.getFirstName(), employeeDetails.getLastName(), employeeDetails.getEmailId());
//		
//		System.out.println(updatedEmployee.getId());
//		System.out.println(updatedEmployee.getFirstName());
//		System.out.println(updatedEmployee.getLastName());
//		System.out.println(updatedEmployee.getEmailId());
//		
//		Employee finalEmployee = employeeRepository.save(updatedEmployee);
		
		employee.setFirstName(employeeDetails.getFirstName());
		employee.setLastName(employeeDetails.getLastName());
		employee.setEmailId(employeeDetails.getEmailId());
		
		Employee updatedEmployee = employeeRepository.save(employee);
		
		return ResponseEntity.ok(updatedEmployee);
	}
	
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee ID does not exist: " + id));
		employeeRepository.delete(employee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
