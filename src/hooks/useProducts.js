import { useEffect } from "react";
import { useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://guarded-dawn-79467.herokuapp.com/products")
      .then((response) => response.json())
      .then(data => setProducts(data.products));
  }, []);
  //return neccessary things
  return [products, setProducts];
};

export default useProducts;
