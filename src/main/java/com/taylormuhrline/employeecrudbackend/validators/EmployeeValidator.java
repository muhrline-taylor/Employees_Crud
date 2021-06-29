package com.taylormuhrline.employeecrudbackend.validators;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import com.taylormuhrline.employeecrudbackend.controllers.EmployeeController;
import com.taylormuhrline.employeecrudbackend.models.Employee;

@Component
public class EmployeeValidator implements Validator{
	
	@Autowired
	private EmployeeController employeeController;
	
	@Override
	public boolean supports(Class<?> clazz) {
		return Employee.class.equals(clazz);
	}
	
	@Override
	public void validate(Object target, Errors errors) {
		Employee employee = (Employee) target;
		
		// VALIDATIONS GO HERE
	}

	
}
