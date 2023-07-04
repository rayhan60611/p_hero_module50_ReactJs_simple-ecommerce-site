// import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-parent-div">
      <div className="card-inner-div">
        <div className="card-img-div">
          <img
            src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg"
            alt=""
          />
        </div>
        <div className="card-title-div">
          <h4>Product Title</h4>
          <p>
            Price: $<span>190</span>
          </p>
        </div>
        <div className="card-Manufacturer-div">
          <h4>
            Manufacturer : <span>Addidas</span>
          </h4>
          <p>
            Rating: <span>3</span> Star
          </p>
        </div>
      </div>
      <button className="btn-add-to-cart">
        Add to Cart <ion-icon name="cart"></ion-icon>
      </button>
    </div>
  );
};

export default Card;
