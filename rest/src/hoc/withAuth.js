import React, { Component } from "react";

const withAuth = (NestedComponent) => {
  const user = { name: "Bob", age: 23 };
  const isAuth = Object.keys(user).length > 0;
  return (props) => {
    return <NestedComponent {...props} isAuth={isAuth} />;
  };
};

// const withAuth=(NestedComponent)=>{

//   return class extends Component {
//     render(){
//       const user = {name: 'Bob', age:23};
//       const isAuth = Object.keys(user).length > 0;
//       return <NestedComponent isAuth={isAuth} {...this.props}/>
//     }
//   }

// }

export default withAuth;
