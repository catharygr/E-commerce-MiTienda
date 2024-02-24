import { useDispatch } from "react-redux";
import {
  addProductAction,
  removeProductAction,
  updateProductAction,
  getProductsAction,
} from "../api/product.js";

export default function useProductActions() {
  const addProductMiddleware = () => {};
  const removeProductMiddleware = () => {};
  const updateProductMiddleware = () => {};
  const getProductsMiddleware = () => {};
  return {
    addProductMiddleware,
    removeProductMiddleware,
    updateProductMiddleware,
    getProductsMiddleware,
  };
}
