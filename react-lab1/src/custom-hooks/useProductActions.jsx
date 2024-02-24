import { useDispatch } from "react-redux";
import { useState } from "react";

import {
  addProductAction,
  removeProductAction,
  updateProductAction,
  getProductsAction,
} from "../api/product.js";

export default function useProductActions() {
  const dispatch = useDispatch();
  const [isLoading, isSetLoading] = useState(true);
  const [error, setError] = useState(null);

  const addProductMiddleware = async (newProduct) => {
    isSetLoading(true);
    try {
      isSetLoading(true);
      setError(null);
      await dispatch(addProductAction(newProduct));
    } catch (error) {
      setError(error);
    } finally {
      isSetLoading(false);
    }
  };
  const removeProductMiddleware = () => {};
  const updateProductMiddleware = () => {};

  const getProductsMiddleware = async () => {
    isSetLoading(true);
    setError(null);
    try {
      await dispatch(getProductsAction());
    } catch (error) {
      setError(error);
    } finally {
      isSetLoading(false);
    }
  };
  return {
    isLoading,
    error,
    addProductMiddleware,
    removeProductMiddleware,
    updateProductMiddleware,
    getProductsMiddleware,
  };
}
