import React, { Component } from "react";
import SimpleContext from "../SimpleContex";

class SimpleProvider extends Component {
  state = {
    number: 10,
    age: 67,
  };

  increment = () => {
    this.setState((prev) => ({
      number: prev.number + 1,
    }));
  };

  render() {
    return (
      <SimpleContext.Provider
        value={{
          number: this.state.number,
          increment: this.increment,
          age: this.state.age,
        }}
      >
        {this.props.children}
      </SimpleContext.Provider>
    );
  }
}

export default SimpleProvider;
