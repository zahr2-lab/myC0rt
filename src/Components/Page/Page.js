import React, { useEffect } from "react";
import Products from "../ProductsList/ProductsList";
import { atom, useRecoilValue } from "recoil";
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
  default: []
});

const Page = () => {
  const page = useRecoilValue(pageState);
  const productsList = useRecoilValue(productsState);

  useEffect(() => {
    products.map((obj) =>
      productsList.push({
        id: productsList.length,
        name: obj.name,
        price: obj.price,
        catagory: obj.catagory
      })
    );
  }, []);

  return (
    <div className="page">
      {page === "main" ? <MainPage></MainPage> : <Products />}
    </div>
  );
};

export default Page;
