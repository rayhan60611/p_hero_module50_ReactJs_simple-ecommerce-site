// import React from "react";
import { useState } from "react";
import "./Shop.css";
import { useEffect } from "react";
import Card from "../cards/Card";

const Shop = () => {
  // using state to read and set data
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../../../db/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="shop-container">
      <div>
        <h4 className="shop-title-h4">Total Products: {products.length}</h4>
        <div className="product-container">
          {products.map((product) => {
            return <Card key={product.id} product={product}></Card>;
          })}
        </div>
      </div>
      <div className="cart-container">
        <h4>Order Summary</h4>
      </div>
    </div>
  );
};

export default Shop;
