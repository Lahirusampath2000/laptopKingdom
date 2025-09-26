package com.example.laptop_server.controller;

import com.example.laptop_server.dto.LaptopDto;
import com.example.laptop_server.entity.Laptop;
import com.example.laptop_server.service.LaptopService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class LaptopController {

    private final LaptopService laptopService;

    public LaptopController(LaptopService laptopService) {
        this.laptopService = laptopService;
    }

    @PostMapping("/laptop")
    public Laptop addLaptop( @Valid @RequestBody LaptopDto laptopDto) {
        Laptop laptop = new Laptop();
        laptop.setBrand(laptopDto.getBrand());
        laptop.setPrice(laptopDto.getPrice());
        laptop.setQuantity(laptopDto.getQuantity());

        return laptopService.addLaptop(laptop);
    }

    @GetMapping("/laptops")
    public List<Laptop> getAllLaptops() {
        return laptopService.getAllLaptops();
    }
}
