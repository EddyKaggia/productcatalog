import React, { useEffect, useState } from "react";

const Catalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/products`);
  }, []);

  return <div></div>;
};

export default Catalog;
