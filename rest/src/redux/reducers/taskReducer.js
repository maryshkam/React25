import { act } from "react-dom/test-utils";
import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "../constants/formConstants";

const initialState = [];

const task = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      return state.filter((task) => task.id !== action.payload);
    case EDIT_ITEM:
      return state.map((task) =>
        task.id === action.payload ? { ...task, status: true } : task
      );
    default:
      return state;
  }
};
export default task;
