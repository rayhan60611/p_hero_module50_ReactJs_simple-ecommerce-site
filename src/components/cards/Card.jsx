// import React from "react";
import "./Card.css";
import noImage from "../../assets/images/NoImageFound.jpg.png";

const Card = (props) => {
  // console.log(props.product);
  const { name, price, ratings, img, seller } = props.product;
  return (
    <div className="card-parent-div">
      <div className="card-inner-div">
        <div className="card-img-div">
          <img src={img ? img : noImage} alt="" />
        </div>
        <div className="card-title-div">
          <h4>{name}</h4>
          <p>
            Price: $<span>{price}</span>
          </p>
        </div>
        <div className="card-Manufacturer-div">
          <h4>
            Manufacturer : <span>{seller}</span>
          </h4>
          <p>
            Rating: <span>3</span> {ratings}
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
