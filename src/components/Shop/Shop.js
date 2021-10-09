import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
        setDisplayProducts(products);
      });
  }, []);

  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const singleKey in savedCart) {
        const addedProduct = products.find(
          (product) => product.key === singleKey
        );
        if (addedProduct) {
          const productQuantity = savedCart[singleKey];
          addedProduct.quantity = productQuantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);

  const handleBuy = (product) => {
    const exist = cart.find((item) => item.key === product.key);
    let newCart = [];
    if (exist) {
      const remaining = cart.filter((item) => item.key !== product.key);
      exist.quantity = exist.quantity + 1;
      newCart = [...remaining, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    //add to local storage
    addToDb(product.key);
  };

  const handleSearch = (event) => {
    const searchText = event.target.value;
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProducts(filteredProducts);
  };

  return (
    <div>
      <div className="container mt-lg-3" style={{ minHeight: "100vh" }}>
        <div className="row">
          <div className="col-12 col-lg-9 product-container">
            <div className="productsHeader d-flex justify-content-around flex-wrap mt-3">
              <h2 className="text-secondary fw-bold mb-md-3 ">Products</h2>
              <div className="searchContainer flex-grow-1 mx-3">
                <input
                  onChange={handleSearch}
                  type="text"
                  className="form-control"
                  placeholder="search product..."
                />
              </div>
            </div>

            {displayProducts.map((product) => (
              <Product
                key={product.key}
                product={product}
                handleBuy={handleBuy}
              ></Product>
            ))}
          </div>

          <div className="col-12 col-lg-3 cart-container ">
            <Cart cart={cart}>
              <Link
                to="/orderReview"
                className="text-decoration-none text-white"
              >
                <Button className="fw-bold btn-success">
                  {" "}
                  <i className="fas fa-hand-holding-usd me-1 "></i> Review Your
                  Order
                </Button>
              </Link>
            </Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
