import axios from "axios";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const API_URL = "http://localhost:3000/products";

export const addProductMiddleware = async (newProduct) => {
  try {
    await axios.post(API_URL, newProduct);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const removeProductMiddleware = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateProductMiddleware = async (product) => {
  try {
    await axios.put(`${API_URL}/${product.id}`, product);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getProductsMiddleware = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
    // const response = await axios.get(API_URL);
    // return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
