import React, { useState, useEffect } from "react";
import Page from "./Components/Page/Page";
import TopBar from "./Components/TopBar/TopBar";
import "./styles.css";

export default function App() {
  const [list, setList] = useState(false);

  return (
    <div className="App">
      <TopBar list={list} setList={setList} />
      <Page list={list} />
    </div>
  );
}
