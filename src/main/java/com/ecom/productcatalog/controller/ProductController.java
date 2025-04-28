package com.ecom.productcatalog.controller;

import com.ecom.productcatalog.model.Product;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {


    @GetMapping
    public List<Product> getAllProducts(){

    }
}
