package com.example.laptop_server.service;

import com.example.laptop_server.entity.Laptop;
import com.example.laptop_server.repository.LaptopRepository;
import org.springframework.stereotype.Service;

@Service
public class LaptopService {

    private final LaptopRepository laptopRepository;

    public LaptopService(LaptopRepository laptopRepository) {
        this.laptopRepository = laptopRepository;
    }

    public Laptop addLaptop(Laptop laptop) {
        return laptopRepository.save(laptop);
    }
}
