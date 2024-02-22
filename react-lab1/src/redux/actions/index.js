import {
  PRODUCTS_ADD_PRODUCT,
  PRODUCTS_DELETE_PRODUCT,
  PRODUCTS_UPDATE_PRODUCT,
} from "./actionTypes";

export const addProduct = (product) => ({
  type: PRODUCTS_ADD_PRODUCT,
  payload: product,
});

export const deleteProduct = (id) => ({
  type: PRODUCTS_DELETE_PRODUCT,
  payload: id,
});

export const updateProduct = (id) => ({
  type: PRODUCTS_UPDATE_PRODUCT,
  payload: id,
});
