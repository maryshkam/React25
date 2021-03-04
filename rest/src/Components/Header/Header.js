import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <AppBar position="static" className="menu">
      <Toolbar variant="dense">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/users" className="link">Users</NavLink>
        <NavLink to="/repos" className="link">Repos</NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
