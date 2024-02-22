import {
  PRODUCTS_ADD_PRODUCT,
  PRODUCTS_DELETE_PRODUCT,
  PRODUCTS_UPDATE_PRODUCT,
} from "../actions/actionTypes";

import data from "../../data/db.json";

const initialState = {
  products: data,
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_ADD_PRODUCT:
    case PRODUCTS_DELETE_PRODUCT:
    case PRODUCTS_UPDATE_PRODUCT:
    default:
      return state;
  }
}

export default productsReducer;

export const getAllProducts = (state) => state.products.products;
