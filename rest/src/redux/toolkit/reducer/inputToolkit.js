import { createReducer } from "@reduxjs/toolkit";
import { inputClear, inputHeandler } from "../actions/inputToolkit";

export default createReducer("", {
  [inputHeandler]: (state, action) => action.payload,
  [inputClear]: (state, action) => "",
});
