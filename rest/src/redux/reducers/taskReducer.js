import {
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  SET_TASKS,
  SET,
} from "../constants/formConstants";

const initialState = [];

const task = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      return state.filter((task) => task.id !== action.payload);
    case EDIT_ITEM:
      return state.map((task) =>
        task.id === action.payload ? { ...task, status: !task.status } : task
      );
    case SET_TASKS:
      return action.payload;
    default:
      return state;
  }
};
export default task;
