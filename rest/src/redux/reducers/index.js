import { combineReducers } from "redux";
import count from "./counterReducer";
import input from "./formReducer";
import task from "../reducers/taskReducer";
import loader from "./loaderReducer";
import error from "./errorReducer";
import user from "./userReducer";

const rootReducer = combineReducers({
  counter: count,
  input,
  task,
  loader,
  error,
  user,
});

export default rootReducer;
