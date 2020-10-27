import React from "react";

import Products from "../ProductsList/ProductsList";
import { atom, useRecoilValue } from "recoil";
import MainPage from "../MainPage/MainPage";
import "./Page.scss";

export const pageState = atom({
  key: "page",
  default: "main"
});

const Page = () => {
  const page = useRecoilValue(pageState);
  return (
    <div className="page">
      {page === "main" ? <MainPage></MainPage> : <Products />}
    </div>
  );
};

export default Page;
