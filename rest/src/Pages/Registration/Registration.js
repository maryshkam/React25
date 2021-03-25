import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { navigation } from "../../constant/route";
import { registerOperation } from "../../redux/operations/auth";

import "./Registration.css";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Registration = () => {
  const [form, setForm] = useState({ ...initialState });

  const dispatch = useDispatch();

  const inputHeadler = ({ target }) => {
    const { name, value } = target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(registerOperation(form));
  };

  return (
    <div>
      <h1>Registration</h1>
      <form className="registration-form" onSubmit={submit}>
        <input
          onChange={inputHeadler}
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
        ></input>
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
        <button>Sign up</button>
      </form>
      <p>
        If you already have an account please{" "}
        <NavLink to={navigation.login}>Sign in</NavLink>
      </p>
    </div>
  );
};

export default Registration;
