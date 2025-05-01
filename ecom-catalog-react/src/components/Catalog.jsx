import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";

const Catalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/products`);
        const data = await response.json();
        console.log("Here is the data: ", data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="='container">
      <h1>ALTAZON</h1>
      <div>
        {products.length ? (
          <ProductList products={products} />
        ) : (
          <p>No Products Found!</p>
        )}
      </div>
    </div>
  );
};

export default Catalog;
