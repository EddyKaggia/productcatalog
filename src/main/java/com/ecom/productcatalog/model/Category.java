package com.ecom.productcatalog.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Data
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @OneToMany(mappedBy = "category",
               cascade = CascadeType.ALL,
               fetch = FetchType.LAZY)
    @JsonIgnore // tells Jackson (Spring Boot’s JSON serializer) to skip the products field during serialization
    private Set<Product> products;
}
