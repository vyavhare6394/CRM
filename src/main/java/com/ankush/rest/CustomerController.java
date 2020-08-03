package com.ankush.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ankush.entity.CustomerEntity;
import com.ankush.service.CustomerService;



@CrossOrigin(origins="http://localhost:3000")
@RestController
public class CustomerController {
	
	@Autowired
	private CustomerService service;
	
	@GetMapping(value= {"/","/customer"})
	public List<CustomerEntity> getCustomers(){
		

		return service.getCustomers();
		
	}
	
	@GetMapping(value="/customer/{id}")
	public Optional<CustomerEntity> getCustomer(@PathVariable("id")int theId){
		
		 Optional<CustomerEntity> customer = service.getCustomer(theId);
		
		return customer;
	}
	
	
	@PostMapping(value="/AddCustomer")
	public CustomerEntity saveCustomer(@RequestBody CustomerEntity theCustomer) {
		
		service.saveCustomer(theCustomer);
		
		return theCustomer;
		
	}
	
	
	@PutMapping("/update")
	public CustomerEntity updateCustomer(@RequestBody CustomerEntity theCustomer) {
		
		service.saveCustomer(theCustomer);
		
		return theCustomer;
		
	}
	
	@DeleteMapping("/deleteCustomer/{id}")
	public String deleteCustomer(@PathVariable("id")int theId) {
		
		service.deleteCustomer(theId);
		
		return "Delete Customer....";
	}
	
	
	
	

}
