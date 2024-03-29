import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../redux/reducers/productsReducer.js";
import {
  addProductThunk,
  updateProductThunk,
} from "../redux/reducers/productsReducer";

export default function useProducts() {
  const products = useSelector(getAllProducts);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [form, setForm] = useState({
    price: "",
    title: "",
    description: "",
    category: "",
    image: "",
  });

  // Función que se ejecuta en el formulario del modal - onSubmit
  const handleSubmitForm = async (forData) => {
    if (modalType === "new") {
      const newProduct = {
        id: uuidv4(),
        title: forData.title,
        price: forData.price,
        description: forData.description,
        category: forData.category,
        image: forData.image,
      };

      try {
        dispatch(addProductThunk(newProduct));
        setIsModalOpen(false);
      } catch (error) {
        console.error("Error creating product", error);
      }
    }

    if (modalType === "edit") {
      const findProduct = products?.find(
        (product) => product.id.toString() === forData.id.toString()
      );
      const editedProduct = {
        ...findProduct,
        title: forData.title,
        price: forData.price,
        description: forData.description,
        category: forData.category,
        image: forData.image,
      };
      try {
        dispatch(updateProductThunk(editedProduct));
        setIsModalOpen(false);
      } catch (error) {
        console.error("Error updating product", error);
      }
    }
  };

  const openEditProductModal = (id) => {
    const filteredProduct = products?.filter(
      (product) => product.id.toString() === id.toString()
    );
    setForm({
      ...filteredProduct[0],
    });
    setIsModalOpen(true);
  };

  return {
    form,
    setForm,
    isModalOpen,
    setIsModalOpen,
    modalType,
    setModalType,
    openEditProductModal,
    handleSubmitForm,
  };
}
