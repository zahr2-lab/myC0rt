import React, { useState } from "react";
import "./Controll.scss";

const Controll = ({ id, quantity }) => {
  const [count, setCount] = useState(quantity);
  return (
    <div className="controll">
      <div
        className={count <= 0 ? "controll-btn" : "controll-add"}
        onClick={() => setCount(count + 1)}
      >
        +
      </div>
      <div className={`controll-count ${count <= 0 && "hidden"}`}>{count}</div>
      <div
        className={`controll-sub ${count <= 0 && "hidden"}`}
        onClick={() => setCount(count - 1)}
      >
        -
      </div>
    </div>
  );
};

export default Controll;
