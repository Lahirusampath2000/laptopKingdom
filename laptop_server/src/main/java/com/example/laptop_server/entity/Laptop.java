package com.example.laptop_server.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
public class Laptop {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "please provide brand")
    private String brand;

    private double price;

    @NotNull(message = "please provide valid quantity")
    private int quantity;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] image;

    public Laptop() {}

    public Laptop(Long id, String brand, double price, int quantity, byte[] image) {
        this.id = id;
        this.brand = brand;
        this.price = price;
        this.quantity = quantity;
        this.image = image;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getBrand() { return brand; }
    public void setBrand(String brand) { this.brand = brand; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public int getQuantity() { return quantity; }
    public void setQuantity(int quantity) { this.quantity = quantity; }

    public byte[] getImage() { return image; }
    public void setImage(byte[] image) { this.image = image; }
}
