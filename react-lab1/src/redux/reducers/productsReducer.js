import {
  PRODUCTS_ADD_PRODUCT,
  PRODUCTS_DELETE_PRODUCT,
  PRODUCTS_UPDATE_PRODUCT,
  PRODUCTS_GET_PRODUCTS,
} from "../actions/actionTypes";

// import data from "../../data/db.json";

const initialState = {
  products: {},
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_ADD_PRODUCT:
      return {
        ...state,
        products: {
          ...state.products,
          products: [...state.products.products, action.payload],
        },
      };
    case PRODUCTS_DELETE_PRODUCT:
      return {
        ...state,
        products: {
          ...state.products,
          products: state.products.products.filter(
            (product) => product.id !== action.payload
          ),
        },
      };
    case PRODUCTS_UPDATE_PRODUCT:
      return {
        ...state,
        products: {
          ...state.products,
          products: state.products.products.map((product) => {
            if (product.id === action.payload.id) {
              return action.payload;
            }
            return product;
          }),
        },
      };
    case PRODUCTS_GET_PRODUCTS:
      return {
        ...state,
        products: {
          ...state.products,
          products: action.payload.data,
        },
        users: {
          ...state.users,
          users: action.payload.data,
        },
      };

    default:
      return state;
  }
}

export default productsReducer;

export const getAllProducts = (state) => state.products.products;
