import { useEffect } from "react";
import { useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then(data => setProducts(data.products));
  }, []);
  //return neccessary things
  return [products, setProducts];
};

export default useProducts;
