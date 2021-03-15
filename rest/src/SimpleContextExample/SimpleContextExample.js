import React, { Component } from "react";
import Red from "./Red/Red";
import SimpleContext from "../context/SimpleContex";

class SimpleContextExample extends Component {
  static contextType = SimpleContext;
  render() {
    console.log(this.context);
    return <Red />;
  }
}

// const SimpleContextExample = () => {
//   return <Red />;
// };

export default SimpleContextExample;
