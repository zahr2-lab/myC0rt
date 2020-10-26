import React from "react";
import "./Card.scss";
import Controll from "../Controll/Controll";

const Card = (props) => {
  return (
    <div className="card">
      <img className="card-img" src={`/img/${props.product.name}.png`} />
      <div className="card-content">
        <div className="card-name">{props.product.name}</div>
        <div className="card-price">$ {props.product.price}</div>
      </div>
      <Controll />
    </div>
  );
};

export default Card;
