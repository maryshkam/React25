import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import {
  composeWithDevTools,
  devToolsEnhancer,
} from "redux-devtools-extension";
// import logger from "redux-logger";
import { ownLogger } from "../redux/logger";

const middleWares = [thunk];
const rootMiddlewares = applyMiddleware(...middleWares);

const compose = composeWithDevTools(rootMiddlewares);

const store = createStore(rootReducer, compose);

export default store;
