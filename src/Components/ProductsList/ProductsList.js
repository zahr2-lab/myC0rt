import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./ProductsList.scss";
import products from "./products";
import { atom, useRecoilValue } from "recoil";
import { pageState } from "../Page/Page";

export const productsQuantityState = atom({
  key: "productsQuantity",
  default: []
});

export default function ProductList() {
  const page = useRecoilValue(pageState);
  const [pageProducts, setPageProducts] = useState([]);

  useEffect(() => {
    const a = [];
    products.map((product) => {
      product.catagory === page && a.push({ ...product });
    });
    console.log(a);
    setPageProducts(a);
  }, []);

  return (
    <div className="productsList">
      {pageProducts.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
}
