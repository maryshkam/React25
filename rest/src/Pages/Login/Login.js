import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { navigation } from "../../constant/route";
import { loginOperation } from "../../redux/operations/auth";

import "./Login.css";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState({ ...initialState });
  const dispatch = useDispatch();
  const inputHeadler = ({ target }) => {
    const { name, value } = target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(loginOperation(form));
  };
  return (
    <div>
      <h1>Login</h1>
      <form className="login-form" onSubmit={submit}>
        <input
          onChange={inputHeadler}
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
        ></input>
        <input
          onChange={inputHeadler}
          type="password"
          name="password"
          placeholder="Your password"
          value={form.password}
        ></input>
        <button>Sign in</button>
      </form>
      <p>
        If you don't have any account please{" "}
        <NavLink to={navigation.registration}>Sign up</NavLink>
      </p>
    </div>
  );
};

export default Login;
