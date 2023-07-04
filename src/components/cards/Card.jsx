// import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-parent-div">
      <div className="card-img-div">
        <img src="" alt="" />
      </div>
      <div>
        <h4>Product Title</h4>
        <p>
          Price: $<span>190</span>
        </p>
      </div>
      <div>
        <p>
          Manufacturer : <span>Addidas</span>
        </p>
        <p>
          Rating: <span>3</span>Star
        </p>
      </div>
      <button>
        Add to Cart <ion-icon name="cart"></ion-icon>
      </button>
    </div>
  );
};

export default Card;
