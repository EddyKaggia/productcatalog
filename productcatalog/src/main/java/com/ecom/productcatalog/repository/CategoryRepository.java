package com.ecom.productcatalog.repository;

import com.ecom.productcatalog.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
// Category -> Type of entity
//Long -> Type of primary key (In Category id has a Long type)
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
