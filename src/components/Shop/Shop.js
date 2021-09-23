import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
      fetch('./products.JSON')
       .then(response => response.json())
        .then(products => setProducts(products))
    }, []);

    const handleBuy = product => {
       const newCart = [...cart,product]
       setCart(newCart)
    }

    return (
        <div>
            <div className="container mt-lg-3">
                <div className="row">

                    <div className="col-12 col-lg-9 product-container">
                       <h2 className="text-secondary fw-bold mb-md-3 my-3">Products:</h2>
                       {products.map(product => <Product key={product.key} product = {product} handleBuy = {handleBuy}></Product>)}
                    </div>

                    <div className="col-12 col-lg-3 cart-container ">
                       <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;