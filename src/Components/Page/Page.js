import React, { useEffect } from "react";
import Products from "../ProductsList/ProductsList";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import MainPage from "../MainPage/MainPage";
import products from "../ProductsList/products";
import "./Page.scss";

export const pageState = atom({
  key: "page",
  default: "main"
});

export const productsState = atom({
  key: "productsList",
  default: []
});

export const productsQuantityState = atom({
  key: "productsQuantity",
  default: 0
});

const Page = () => {
  const page = useRecoilValue(pageState);
  const setProductList = useSetRecoilState(productsState);

  useEffect(() => {
    const a = [];
    products.map((obj) =>
      a.push({
        id: obj.id,
        name: obj.name,
        price: obj.price,
        catagory: obj.catagory
      })
    );
    setProductList(a);
  }, [setProductList]);

  return (
    <div className="page">
      {page === "main" ? <MainPage></MainPage> : <Products />}
    </div>
  );
};

export default Page;
