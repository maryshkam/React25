import { combineReducers } from "redux";
import input from "../reducer/inputToolkit";
import tasks from "../reducer/todoListToolkit";
import type from "../reducer/filterType";

const rootReducer = combineReducers({
  form: input,
  tasks,
  type,
});

export default rootReducer;
