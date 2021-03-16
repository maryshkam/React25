import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { reset, increment, decrement } from "../../redux/actions/counterAction";

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const refresh = () => {
    dispatch(reset());
  };

  return (
    <div className={classes.Container}>
      <h1>Counter</h1>
      {/* <div className={classes.Count}>{number}</div> */}
      <div className={classes.Count}>{counter}</div>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={refresh}>0</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  );
};

export default Counter;

// const mapStateToProps = (state) => ({
//   number: state.counter,
// });

// const mapDispatchToProps = {
//   refresh: reset,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
