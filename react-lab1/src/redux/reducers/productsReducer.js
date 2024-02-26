// import {
//   PRODUCTS_ADD_PRODUCT,
//   PRODUCTS_DELETE_PRODUCT,
//   PRODUCTS_UPDATE_PRODUCT,
//   PRODUCTS_GET_PRODUCTS,
// } from "../actions/actionTypes";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: null,
};

// Slice

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products.products = state.products.products.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct: (state, action) => {
      state.products.products = state.products.products.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
    },
    getProducts: (state, action) => {
      state.products.products = action.payload;
    },
  },
});

// function productsReducer(state = initialState, action) {
//   switch (action.type) {
//     case PRODUCTS_ADD_PRODUCT:
//       return {
//         ...state,
//         products: {
//           ...state.products,
//           products: [...state.products.products, action.payload],
//         },
//       };
//     case PRODUCTS_DELETE_PRODUCT:
//       return {
//         ...state,
//         products: {
//           ...state.products,
//           products: state.products.products.filter(
//             (product) => product.id !== action.payload
//           ),
//         },
//       };
//     case PRODUCTS_UPDATE_PRODUCT:
//       return {
//         ...state,
//         products: {
//           ...state.products,
//           products: state.products.products.map((product) => {
//             if (product.id === action.payload.id) {
//               return action.payload;
//             }
//             return product;
//           }),
//         },
//       };
//     case PRODUCTS_GET_PRODUCTS:
//       return {
//         ...state,
//         products: {
//           ...state.products,
//           products: action.payload,
//         },
//       };

//     default:
//       return state;
//   }
// }

export default productsSlice.reducer;

export const getAllProducts = (state) => state.products.products;
