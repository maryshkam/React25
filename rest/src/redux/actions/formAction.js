import { INPUT_CHANGE, INPUT_CLEAR } from "../constants/formConstants";

export const inputHeandler = (e) => ({
  type: INPUT_CHANGE,
  payload: e.target.value,
});

export const inputClear =()=>({
  type: INPUT_CLEAR,
})
