import React from "react";
import { useSetRecoilState } from "recoil";
import { pageState } from "../Page/Page";

const pages = [
  { name: "fruits" },
  { name: "vegetables" },
  { name: "proteins" }
];

export default function MainPage() {
  const setPage = useSetRecoilState(pageState);
  return (
    <div>
      {pages.map((page, index) => (
        <div key={index}>
          <div onClick={() => setPage(page.name)}>{page.name}</div>
        </div>
      ))}
    </div>
  );
}
