package com.ankush.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ankush.entity.CustomerEntity;
import com.ankush.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository repo;
	
	
	
	public List<CustomerEntity> getCustomers() {
		
		List<CustomerEntity> customerList = repo.findAll();
	
		return customerList;
	}

	public void saveCustomer(CustomerEntity theCustomer) {
		
		 repo.save(theCustomer);
		
		
	

	}

	public Optional<CustomerEntity> getCustomer(int theId) {
		
		return repo.findById(theId);
	}

	public void deleteCustomer(int theId) {
		
		
		repo.deleteById(theId);

	}

}
