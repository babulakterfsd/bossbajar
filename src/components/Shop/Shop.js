import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch('./products.JSON')
       .then(response => response.json())
        .then(products => setProducts(products))
    }, [])
    return (
        <div>
            <div className="container mt-lg-3">
                <div className="row">
                    <div className="col-12 col-lg-9 product-container">
                       <h2 className="text-secondary fw-bold mb-md-3 my-3">Products:</h2>
                       {products.map(product => <Product key={product.key} product = {product}></Product>)}
                    </div>
                    <div className="col-12 col-lg-3 cart-container ">
                       <h4 className="text-secondary fw-bold">Order Summary:</h4>
                       <h6 className="text-secondary">Items Ordered:</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;