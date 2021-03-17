import { combineReducers } from "redux";
import count from "./counterReducer";
import input from './formReducer';
import task from './taskReducer';

const rootReducer = combineReducers({
  counter: count,
  input,
  task
});


export default rootReducer;