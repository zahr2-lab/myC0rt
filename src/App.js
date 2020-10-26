import React from "react";
import Page from "./Components/Page/Page";
import TopBar from "./Components/TopBar/TopBar";
import "./styles.css";
import { atom, useRecoilValue } from "recoil";
import CartPage from "./Components/ShoppingCart/CartPage";

export const cartState = atom({
  key: "cart",
  default: false
});

export const menuState = atom({
  key: "menu",
  default: false
});

export default function App() {
  const cart = useRecoilValue(cartState);
  return (
    <div className="App">
      <TopBar />
      {cart ? <CartPage /> : <Page />}
    </div>
  );
}
