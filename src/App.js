import React from "react";
import Page from "./Components/Page/Page";
import TopBar from "./Components/TopBar/TopBar";
import { atom, useRecoilValue } from "recoil";
import CartPage from "./Components/ShoppingCart/CartPage";
import Menu from "./Components/Menu/Menu";
import "./styles.scss";

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
  const menu = useRecoilValue(menuState);

  return (
    <div className="App">
      <div className="container">
        {menu && <Menu />}
        <div className="page">
          <TopBar />
          {cart ? <CartPage /> : <Page />}
        </div>
      </div>
    </div>
  );
}
