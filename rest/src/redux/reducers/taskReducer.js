import { act } from "react-dom/test-utils";
import { ADD_ITEM } from "../constants/formConstants";

const initialState = [];

const task = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
};
export default task;
