package com.ankush.service;

import java.util.List;
import java.util.Optional;

import com.ankush.entity.CustomerEntity;

public interface CustomerService {
	
	public List<CustomerEntity> getCustomers();

	public void saveCustomer(CustomerEntity theCustomer);

	public Optional<CustomerEntity> getCustomer(int theId);

	public void deleteCustomer(int theId);

}
