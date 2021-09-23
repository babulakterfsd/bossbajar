import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    let productsTotalPrice = 0;
    let shippingAndHandling = 0;
    let totalBeforeTax = 0;
    let estimatedTax = 0;
    let orderTotal = 0;

    for(let product of cart) {
         productsTotalPrice += product.price;
         shippingAndHandling += product.shipping;
         totalBeforeTax = productsTotalPrice + shippingAndHandling;
         estimatedTax = (totalBeforeTax * 20) / 100;
         orderTotal = totalBeforeTax + estimatedTax;
    }

    return (
      <div className="cart text-secondary text-center my-2 my-md-0">
         <h5 className="text-success">Order Summary: </h5>
         <h5 className="text-muted"><small>items ordered: {cart.length}</small></h5>

         <div className="d-flex justify-content-around"><small>products original price:</small><small>{productsTotalPrice.toFixed(2)}</small></div>

         <div className="d-flex justify-content-around"><small>shipping charge:</small><small>{shippingAndHandling.toFixed(2)}</small></div>

         <div className="d-flex justify-content-around"><small>total before tax:</small><small>{totalBeforeTax.toFixed(2)}</small></div>

         <div className="d-flex justify-content-around"><small>estimated tax:</small><small>{estimatedTax.toFixed(2)}</small></div>
         
         <div className="d-flex justify-content-around"><h5 className="text-muted">Total Bill:</h5><h5 className="text-muted">{orderTotal.toFixed(2)}</h5></div>

         <button className="btn btn-success fw-bold px-3 px-lg-4 text-white mt-2">Review Your Order</button>
      </div>
    );
};

export default Cart;