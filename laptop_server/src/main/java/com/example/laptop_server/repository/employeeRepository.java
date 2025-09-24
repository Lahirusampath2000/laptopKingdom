package com.example.laptop_server.repository;

import com.example.laptop_server.entity.laptop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface employeeRepository extends JpaRepository<laptop, Integer> {
}
