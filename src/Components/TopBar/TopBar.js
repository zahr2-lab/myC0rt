import React from "react";

import "./TopBar.scss";

const TopBar = (props) => {
  return (
    <div className="topBar">
      <div className="topBar-Burger">|||</div>
      <div className="topBar-Switch" onClick={() => props.setList(!props.list)}>
        <span className={!props.list && "list"}>[#]</span>
      </div>
    </div>
  );
};

export default TopBar;
