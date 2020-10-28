import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./ProductsList.scss";
import { useRecoilValue } from "recoil";
import { pageState, productsState } from "../Page/Page";

export default function ProductList() {
  const page = useRecoilValue(pageState);
  const [pageProducts, setPageProducts] = useState([]);
  const productsList = useRecoilValue(productsState);

  useEffect(() => {
    const a = [];
    productsList.map((obj) => obj.catagory === page && a.push({ ...obj }));
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
