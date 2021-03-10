import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component, ...rest }) => {
  // console.log(rest);
  const isAuth = true;

  const Interface = component;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Interface {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
