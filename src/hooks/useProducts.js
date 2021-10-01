import { useEffect } from "react";
import { useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  //return neccessary things
  return [products, setProducts];
};

export default useProducts;
