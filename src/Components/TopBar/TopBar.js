import React from "react";

import "./TopBar.scss";

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="topBar-Burger">|||</div>
      <div className="topBar-Switch" onClick={() => console.log("cart")}>
        <span>[#]</span>
      </div>
    </div>
  );
};

export default TopBar;
