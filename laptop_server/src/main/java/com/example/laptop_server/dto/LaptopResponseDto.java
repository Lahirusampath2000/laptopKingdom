package com.example.laptop_server.dto;

public class LaptopResponseDto {
    private Long id;
    private String brand;
    private double price;
    private int quantity;
    private String image; // Base64 string

    public LaptopResponseDto(Long id, String brand, double price, int quantity, String image) {
        this.id = id;
        this.brand = brand;
        this.price = price;
        this.quantity = quantity;
        this.image = image;
    }

    public Long getId() { return id; }
    public String getBrand() { return brand; }
    public double getPrice() { return price; }
    public int getQuantity() { return quantity; }
    public String getImage() { return image; }
}
