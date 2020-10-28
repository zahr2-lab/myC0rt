import React, { useEffect } from "react";
import "./Card.scss";
import Controll from "../Controll/Controll";
import { atomFamily, useRecoilState, useSetRecoilState } from "recoil";
import { productsQuantityState } from "../Page/Page";

export const productQuantityState = atomFamily({
  key: "productQuantity",
  default: { id: "", quantity: "" }
});

const Card = ({ product }) => {
  const [{ id, quantity }, setProductQuantity] = useRecoilState(
    productQuantityState(product.id)
  );
  const [productsQuantity, setProductsQuantity] = useRecoilState(
    productsQuantityState
  );

  useEffect(() => {
    setProductsQuantity([...productsQuantity, { id: product.id, quantity: 0 }]);
    console.log(productQuantity);
  }, []);

  return (
    <div className="card">
      <img className="card-img" src={`/img/${product.name}.png`} alt="" />
      <div className="card-content">
        <div className="card-name">{product.name}</div>
        <div className="card-price">$ {product.price}</div>
      </div>
      <Controll />
    </div>
  );
};

export default Card;
