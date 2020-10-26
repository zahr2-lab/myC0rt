import React from "react";
import Page from "./Components/Page/Page";
import TopBar from "./Components/TopBar/TopBar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <TopBar />
      <Page />
    </div>
  );
}
