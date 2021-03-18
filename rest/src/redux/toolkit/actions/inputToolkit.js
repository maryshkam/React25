import { createAction } from "@reduxjs/toolkit";
import { INPUT_CHANGE, INPUT_CLEAR } from "../../constants";

export const inputHeandler = createAction(
  INPUT_CHANGE,
  ({ target }) => {
    return { payload: target.value };
  }
);
export const inputClear = createAction(INPUT_CLEAR);
