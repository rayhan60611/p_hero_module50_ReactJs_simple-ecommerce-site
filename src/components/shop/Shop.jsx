// import React from "react";
import { useState } from "react";
import "./Shop.css";
import { useEffect } from "react";
import Card from "../cards/Card";

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
              <Card
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
              ></Card>
            );
          })}
        </div>
      </div>
      <div className="cart-bill-container-parent">
        <div className="cart-bill-container">
          <h4 className="cart-bill-h4">Order Summary</h4>
          <p>Selected Items: {cart.length}</p>
          <p>Total Price: ${cart.length}</p>
          <p>Total Shipping Charge: ${cart.length}</p>
          <p>Tax: ${cart.length}</p>
          <h4 className="cart-bill-h4">Grand Total: ${cart.length}</h4>
        </div>
        <div className="btn-container">
          <button className="btn-clear-cart">
            Clear Cart <ion-icon name="trash-outline"></ion-icon>
          </button>
          <button className="btn-review-order">
            Review Order{" "}
            <ion-icon name="arrow-forward-circle-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
