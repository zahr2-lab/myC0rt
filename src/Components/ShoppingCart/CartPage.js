import React from "react";
import { productQuantityState } from "../Page/Page";
import { atom, useRecoilValue } from "recoil";

export const cartListState = atom({
  key: "cartList",
  default: []
});

export default function CartPage() {
  const cartList = useRecoilValue(cartListState);
  return (
    <div>
      {cartList.map((obj) => {
        <div>obj.name</div>;
      })}
    </div>
  );
}
