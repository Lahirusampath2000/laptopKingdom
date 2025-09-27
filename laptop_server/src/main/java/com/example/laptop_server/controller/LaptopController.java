package com.example.laptop_server.controller;

import com.example.laptop_server.dto.LaptopResponseDto;
import com.example.laptop_server.entity.Laptop;
import com.example.laptop_server.service.LaptopService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class LaptopController {

    private final LaptopService laptopService;

    public LaptopController(LaptopService laptopService) {
        this.laptopService = laptopService;
    }

    // ✅ Add laptop with image upload
    @PostMapping(value = "/laptop", consumes = {"multipart/form-data"})
    public Laptop addLaptop(
            @RequestParam("brand") String brand,
            @RequestParam("price") double price,
            @RequestParam("quantity") int quantity,
            @RequestParam(value = "image", required = false) MultipartFile imageFile
    ) throws Exception {

        Laptop laptop = new Laptop();
        laptop.setBrand(brand);
        laptop.setPrice(price);
        laptop.setQuantity(quantity);

        if (imageFile != null && !imageFile.isEmpty()) {
            laptop.setImage(imageFile.getBytes());
        }

        return laptopService.addLaptop(laptop);
    }

    // ✅ Fetch laptops and convert image bytes to Base64 String for React
    @GetMapping("/laptops")
    public List<LaptopResponseDto> getAllLaptops() {
        return laptopService.getAllLaptops()
                .stream()
                .map(l -> new LaptopResponseDto(
                        l.getId(),
                        l.getBrand(),
                        l.getPrice(),
                        l.getQuantity(),
                        l.getImage() != null ? Base64.getEncoder().encodeToString(l.getImage()) : null
                ))
                .collect(Collectors.toList());
    }
}
