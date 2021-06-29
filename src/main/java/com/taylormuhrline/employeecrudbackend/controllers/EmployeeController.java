package com.taylormuhrline.employeecrudbackend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.taylormuhrline.employeecrudbackend.exceptions.ResourceNotFoundException;
import com.taylormuhrline.employeecrudbackend.models.Employee;
import com.taylormuhrline.employeecrudbackend.repositories.EmployeeRepository;

@CrossOrigin(origins="http://localhost:3000")
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
	
	// GET ONE EMPLOYEE BY ID
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee ID does not exist: " + id));
		return ResponseEntity.ok(employee);
	}
	
	// CREATE EMPLOYEE
	@PostMapping("/employees/new")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	
	
	// DELETE EMPLOYEE
	@DeleteMapping("/employees/{id}")
	public void deleteEmployee(@PathVariable("id")Long id) {
		Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee ID does not exist: " + id));
		employeeRepository.delete(employee);
	}
	

}
