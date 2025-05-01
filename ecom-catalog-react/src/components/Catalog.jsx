import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";

const Catalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/products`);

        const data = response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  }, []);

  return (
    <div className="='container">
      <div>
        {products.length ? <div>{ProductList}</div> : <p>No Products Found!</p>}
      </div>
    </div>
  );
};

export default Catalog;
