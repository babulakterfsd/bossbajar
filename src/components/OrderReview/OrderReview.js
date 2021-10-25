import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import ReviewProduct from "./ReviewProduct/ReviewProduct";
import "./OrderReview.css";
import Cart from "../Cart/Cart";
import { clearTheCart, removeFromDb } from "../../utilities/fakedb";
import { useHistory } from "react-router";

const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart();
  const history = useHistory();

  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    removeFromDb(key);
  };

  const handlePlaceOrder = () => {
    if (cart.length !== 0) {
      history.push("/shipping");
    } else {
      history.push("/Shop");
    }
    // setCart([]);
    // clearTheCart();
  };

  return (
    <Container>
      <Row style={{ minHeight: "100vh" }}>
        <div className="col-12 col-lg-9 product-container">
          {cart.map((product) => (
            <ReviewProduct
              product={product}
              key={product.key}
              handleRemove={handleRemove}
            ></ReviewProduct>
          ))}
        </div>
        <div className="col-12 col-lg-3 cart-container ">
          <Cart cart={cart}>
            <Button onClick={handlePlaceOrder} className="fw-bold btn-success">
              {" "}
              <i className="fas fa-money-check-alt me-1"></i> Proceed to
              Shipping
            </Button>
          </Cart>
        </div>
      </Row>
    </Container>
  );
};

export default OrderReview;
