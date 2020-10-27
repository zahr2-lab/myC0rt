import React, { useEffect } from "react";
import "./Card.scss";
import Controll from "../Controll/Controll";
import { atomFamily } from "recoil";

export const productQuantityState = atomFamily({
  key: "productQuantity",

  default: { id: "", quantity: "" }
});

const Card = (props) => {
  useEffect(() => {}, []);

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
