import React, { useState, useEffect } from "react";
import { atom, useRecoilValue } from "recoil";
import CartCard from "./CartCard";
import { productsState } from "../Page/Page";
import "./CartCard.scss";

export const cartListState = atom({
  key: "cartList",
  default: []
});

export default function CartPage() {
  const cartList = useRecoilValue(cartListState);
  const products = useRecoilValue(productsState);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const selectedProducts = products.filter((obj) =>
      cartList
        .filter((items) => items.quantity !== 0)
        .map((items) => items.id)
        .includes(obj.id)
    );
    // const selectedwithoutRemove = products.filter((obj) =>
    //   cartList.map((items) => items.id).includes(obj.id)
    // );
    setCartProducts(selectedProducts);
  }, [cartList]);

  return (
    <div>
      <div className="cartItems">
        {cartProducts.map((obj) => (
          <div key={obj.id}>
            <CartCard product={obj} />
          </div>
        ))}
      </div>
    </div>
  );
}
