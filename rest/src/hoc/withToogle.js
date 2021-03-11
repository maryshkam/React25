import React, { Component, useState } from "react";

const withToogle = (NestedComponent) => {
  return (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toogle = () => {
      setIsOpen(!isOpen);
    };
    return <NestedComponent {...props} open={isOpen} toogle={toogle} />;
  };
};

// const withToogle = (NestedComponent) => {
//   return class extends Component {
//     state = {
//       isOpen: false,
//     };
//     toogle = () => {
//       this.setState((prev) => ({
//         isOpen: !prev.isOpen,
//       }));
//     };
//     render() {
//       return (
//         <NestedComponent
//           {...this.props}
//           open={this.state.isOpen}
//           toogle={this.toogle}
//         />
//       );
//     }
//   };
// };

export default withToogle;
