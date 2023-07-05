// import React from "react";
import { useState } from "react";
import "./Shop.css";
import { useEffect } from "react";
import Product from "../products/Product";
import Cart from "../cart/Cart";

const Shop = () => {
  // using state to read and set data
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("../../../db/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div>
        <h4 className="shop-title-h4">Total Products: {products.length}</h4>
        <div className="product-container">
          {products.map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
              ></Product>
            );
          })}
        </div>
      </div>
      <div className="cart-bill-container-parent">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
