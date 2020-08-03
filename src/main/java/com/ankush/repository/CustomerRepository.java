package com.ankush.repository;

import java.io.Serializable;

import org.hibernate.engine.jdbc.SerializableBlobProxy;
import org.hibernate.mapping.Selectable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ankush.entity.CustomerEntity;

@Repository
public interface CustomerRepository extends JpaRepository<CustomerEntity,Serializable> {

}
