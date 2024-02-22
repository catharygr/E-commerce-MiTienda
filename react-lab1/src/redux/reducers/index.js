import { combineReducers } from "redux";
import productsReducer from "./productsReducer.js";

const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;
