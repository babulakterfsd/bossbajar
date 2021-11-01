import { Button, Spinner } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import useCart from "../../hooks/useCart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart();
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [displayProducts, setDisplayProducts] = useState([]);

  const size = 10;
  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setDisplayProducts(data.products);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);

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
  }, []);

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

  if (products.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{minHeight: '100vh'}}>
        <Spinner animation="border" variant="success" />
      </div>
    );
  }

  return (
    <div>
      <div className="container mt-lg-3" style={{ minHeight: "100vh" }}>
        <div className="row">
          <div className="col-12 col-lg-9 product-container">
            <div className="productsHeader d-flex align-items-center justify-content-around flex-wrap mt-3">
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
            <div className="pagination d-flex justify-content-center mb-5 ">
              {[...Array(pageCount).keys()].map((number) => (
                <Button
                  key={number}
                  onClick={() => setPage(number)}
                  className={
                    number === page
                      ? "fw-bolder btn-success text-warning mx-1 my-2 px-2 py-1 shadow-none"
                      : "btn-success mx-1 my-2 px-2 py-1 shadow-none"
                  }
                >
                  {number + 1}
                </Button>
              ))}
            </div>
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
