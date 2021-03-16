import React from "react";
import classes from "./Counter.module.css";

const Counter = () => {
  return (
    <div className={classes.Container}>
      <h1>Counter</h1>
      <div className={classes.Count}>10</div>
      <div>
        <button>-</button>
        <button>0</button>
        <button>+</button>
      </div>
    </div>
  );
};

export default Counter;
