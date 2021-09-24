import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    let productsTotalPrice = 0,
        shippingAndHandling = 0,
        totalBeforeTax = 0,
        estimatedTax = 0,
        orderTotal = 0,
        totalQuantity = 0;

    for(let product of cart) {
         product.quantity = !product.quantity ? 1 : product.quantity;
         totalQuantity = totalQuantity + product.quantity

         productsTotalPrice += product.price * product.quantity;
         shippingAndHandling += product.shipping * product.quantity;
         totalBeforeTax = productsTotalPrice + shippingAndHandling;
         estimatedTax = (totalBeforeTax * 20) / 100;
         orderTotal = totalBeforeTax + estimatedTax;
    }

    return (
      <div className="cart text-secondary text-center my-2 my-md-0">
         <h5 className="text-success">Order Summary: </h5>
         <h5 className="text-muted"><small>items ordered: {totalQuantity}</small></h5>

         <div className="d-flex justify-content-around"><small>products total price:</small><small>{productsTotalPrice.toFixed(2)}</small></div>

         <div className="d-flex justify-content-around"><small>shipping charge:</small><small>{shippingAndHandling.toFixed(2)}</small></div>

         <div className="d-flex justify-content-around"><small>total before tax:</small><small>{totalBeforeTax.toFixed(2)}</small></div>

         <div className="d-flex justify-content-around"><small>estimated tax:</small><small>{estimatedTax.toFixed(2)}</small></div>
         
         <div className="d-flex justify-content-around"><h5 className="text-muted">Total Bill:</h5><h5 className="text-muted">{orderTotal.toFixed(2)}</h5></div>

         <button className="btn btn-success fw-bold px-3 px-lg-4 text-white mt-2">Review Your Order</button>
      </div>
    );
};

export default Cart;