package com.example.laptop_server.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class LaptopDto {

    @NotBlank(message="please provide brand")
    private String brand;
    private double price;
    @NotNull(message="please provide valid quantity")
    private int quantity;

    public LaptopDto() {}

    public LaptopDto(String brand, double price, int quantity) {
        this.brand = brand;
        this.price = price;
        this.quantity = quantity;
    }

    public String getBrand() { return brand; }
    public void setBrand(String brand) { this.brand = brand; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public int getQuantity() { return quantity; }
    public void setQuantity(int quantity) { this.quantity = quantity; }
}