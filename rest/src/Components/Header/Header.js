import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { navigation } from "../../constant/route";
import { logOut } from "../../redux/operations/auth";

import "./Header.css";

const Header = () => {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOut(token));
  };
  return (
    <header className="nav">
      <NavLink to={navigation.home} className="nav__link">
        Home
      </NavLink>
      <NavLink to={navigation.login} className="nav__link">
        Login
      </NavLink>
      <NavLink to={navigation.registration} className="nav__link">
        Registration
      </NavLink>

      <button onClick={logout}>Log Out</button>
    </header>
  );
};

export default Header;
