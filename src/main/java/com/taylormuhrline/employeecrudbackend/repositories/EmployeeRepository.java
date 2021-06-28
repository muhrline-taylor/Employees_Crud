package com.taylormuhrline.employeecrudbackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.taylormuhrline.employeecrudbackend.models.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
