import { combineReducers } from "redux";
import input from "../reducer/inputToolkit";
import tasks from "../../toolkit/reducer/todoListToolkit";
import type from "../../toolkit/reducer/filterType";

const rootReducer = combineReducers({
  form: input,
  tasks,
  type,
});

export default rootReducer;
