import { combineReducers } from "redux";
import input from "../reducer/inputToolkit";
import tasks from "../../slice/todoSlice";
import type from "../../slice/filterSlice";

const rootReducer = combineReducers({
  form: input,
  tasks,
  type,
});

export default rootReducer;
