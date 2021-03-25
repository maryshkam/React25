import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import {
  composeWithDevTools,
  devToolsEnhancer,
} from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";
import { ownLogger } from "../redux/logger";

const middleWares = [thunk];
const rootMiddlewares = applyMiddleware(...middleWares);

const compose = composeWithDevTools(rootMiddlewares);

const persistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, compose);
export const persistor = persistStore(store);

export default store;
