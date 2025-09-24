package com.example.laptop_server.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;


@Entity
@Data

public class laptop {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int id;

    private String brand;

    private double price;

    private int quantity;



}
