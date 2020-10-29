import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState, menuState } from "../../App.js";
import { productsQuantityState } from "../Page/Page";
import "./TopBar.scss";

export default function TopBar() {
  const [cart, setCart] = useRecoilState(cartState);
  const [menu, setMenu] = useRecoilState(menuState);
  const quantity = useRecoilValue(productsQuantityState);

  return (
    <div className="topBar">
      <div className="topBar-Burger" onClick={() => setMenu(!menu)}>
        |||
      </div>
      <div className="topBar-Cart" onClick={() => setCart(!cart)}>
        {cart ? (
          <span>&#8962;</span>
        ) : (
          <>
            <span className="topBar-Cart-point">{quantity}</span>
            <span>&#128722;</span>
          </>
        )}
      </div>
    </div>
  );
}
