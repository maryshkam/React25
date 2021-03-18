import { combineReducers } from "redux";
import input from "../reducer/inputToolkit";
import tasks from "../reducer/todoListToolkit";

const rootReducer = combineReducers({
  form: input,
  tasks,
});

export default rootReducer;
