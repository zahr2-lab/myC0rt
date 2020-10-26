import React from "react";
import Card from "../Card/Card";
import "./ProductsList.scss";
import "./products";

const ProductList = (props) => {
  return (
    <div className={`productsList ${props.list && "listView"}`}>
      {products.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
