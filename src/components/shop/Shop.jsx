// import React from "react";
import { useState } from "react";
import "./Shop.css";
import { useEffect } from "react";

const Shop = () => {
  // using state to read and set data
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../../../db/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="product-container">
        <h4>All Products</h4>
      </div>
      <div className="cart-container">
        <h4>Order Summary</h4>
      </div>
    </div>
  );
};

export default Shop;
