import { createReducer } from "@reduxjs/toolkit";
import { changeType } from "../actions/filterType";

export default createReducer("All", {
  [changeType]: (state, { payload }) => payload,
});
