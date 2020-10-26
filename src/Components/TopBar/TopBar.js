import React from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../../App.js";
import "./TopBar.scss";

const TopBar = () => {
  const [cart, setCart] = useRecoilState(cartState);
  return (
    <div className="topBar">
      <div className="topBar-Burger">|||</div>
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
};

export default TopBar;
