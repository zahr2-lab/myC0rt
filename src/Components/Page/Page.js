import React from "react";

import Products from "../ProductsList/ProductsList";

import "./Page.scss";

const Page = (props) => {
  return (
    <div className="page">
      <Products list={props.list} />
    </div>
  );
};

export default Page;
