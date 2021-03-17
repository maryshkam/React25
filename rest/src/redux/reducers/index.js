import { combineReducers } from "redux";
import count from "./counterReducer";
import input from './formReducer';
import task from '../ducks/task';

const rootReducer = combineReducers({
  counter: count,
  input,
  task
});


export default rootReducer;