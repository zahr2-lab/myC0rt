import React, { useState, useEffect } from "react";
import "./Controll.scss";
import { atomFamily, useRecoilState } from "recoil";
import { productsQuantityState } from "../Page/Page";

export const productQuantityState = atomFamily({
  key: "productQuantity",

  default: { id: "", quantity: 0 }
});

const Controll = (props) => {
  const [{ id, quantity }, setProductQuantity] = useRecoilState(
    productQuantityState(props.id)
  );

  const [productsQuantity, setProductsQuantity] = useRecoilState(
    productsQuantityState
  );

  const [count, setCount] = useState(quantity);

  useEffect(() => {
    setProductQuantity({ id: props.id, quantity: 0 });
  }, []);

  const action = (add) => {
    add ? setCount(count + 1) : setCount(count - 1);

    setProductQuantity({ id, quantity });

    add
      ? setProductsQuantity(productsQuantity + 1)
      : setProductsQuantity(productsQuantity - 1);
  };

  return (
    <div className="controll">
      <div
        className={count <= 0 ? "controll-btn" : "controll-add"}
        onClick={() => action(true)}
      >
        +
      </div>

      <div className={`controll-count ${count <= 0 && "hidden"}`}>{count}</div>

      <div
        className={`controll-sub ${count <= 0 && "hidden"}`}
        onClick={() => action(false)}
      >
        -
      </div>
    </div>
  );
};

export default Controll;
