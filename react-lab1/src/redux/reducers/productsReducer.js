import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as PRODUCT_API from "../../api/product";

// Thunks

export const getProductsThunk = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const response = await PRODUCT_API.getProductsMiddleware();
      console.log(response);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

// Slice
const initialState = {
  products: null,
  loading: true,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addMatcher(
        (action) => action.type.endsWith("pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        }
      );
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

export const { getProducts } = productsSlice.actions;
export const getAllProducts = (state) => state.products.products;
export const getProductsLoading = (state) => state.products.loading;
export const getProductsError = (state) => state.products.error;
