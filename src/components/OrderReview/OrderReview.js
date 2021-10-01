import React from "react";
import { Container, Row } from "react-bootstrap";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import ReviewProduct from "./ReviewProduct/ReviewProduct";
import "./OrderReview.css";
import Cart from "../Cart/Cart";
import { removeFromDb } from "../../utilities/fakedb";

const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    removeFromDb(key);
  };

  return (
    <Container>
      <Row>
        <div className="col-12 col-lg-9 product-container">
          {cart.map((product) => (
            <ReviewProduct
              product={product}
              key={product.key}
              handleRemove={handleRemove}
            ></ReviewProduct>
          ))}
        </div>
        <div className="col-12 col-lg-3 mt-3">
          <div className="cart-container">
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default OrderReview;
