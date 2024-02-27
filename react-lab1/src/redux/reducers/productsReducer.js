import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as PRODUCT_API from "../../api/product";

// Thunks

export const getProductsThunk = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const response = await PRODUCT_API.getProductsMiddleware();
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
export const revomeProductThunk = createAsyncThunk(
  "products/removeProduct",
  async (id) => {
    try {
      await PRODUCT_API.removeProductMiddleware(id);
      return id;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
export const addProductThunk = createAsyncThunk(
  "products/addProduct",
  async (newProduct) => {
    try {
      await PRODUCT_API.addProductMiddleware(newProduct);
      return newProduct;
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
      .addCase(revomeProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(addProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = [...state.products, action.payload];
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

export default productsSlice.reducer;

export const { getProducts } = productsSlice.actions;
export const getAllProducts = (state) => state.products.products;
export const getProductsLoading = (state) => state.products.loading;
export const getProductsError = (state) => state.products.error;
