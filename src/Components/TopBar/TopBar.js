import React from "react";
import { useRecoilState } from "recoil";
import { cartState, menuState } from "../../App.js";
import "./TopBar.scss";

export default function TopBar() {
  const [cart, setCart] = useRecoilState(cartState);
  const [menu, setMenu] = useRecoilState(menuState);

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
            <span className="topBar-Cart-point">1</span>
            <span>&#128722;</span>
          </>
        )}
      </div>
    </div>
  );
}
