import React from "react";
import Card from "../Card/Card";
import "./ProductsList.scss";
import "./products";

export default function ProductList() {
  return (
    <div className="productsList">
      {products.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
}
