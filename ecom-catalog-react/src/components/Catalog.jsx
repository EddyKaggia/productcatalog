import React, { useEffect, useState } from "react";

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

  return <div></div>;
};

export default Catalog;
