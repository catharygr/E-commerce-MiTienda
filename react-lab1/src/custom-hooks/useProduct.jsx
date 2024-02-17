import data from "../assets/data.json";
import { useState } from "react";

export default function useProduct() {
  const [products, setProducts] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [form, setForm] = useState({
    price: "",
    title: "",
    description: "",
  });

  const deleteProduct = (id) => {
    console.log("Deleting product", id);
  };

  const addProduct = () => {
    console.log("Adding product");
  };

  const editProduct = (id) => {
    console.log("Editing product");
    const filteredProduct = products.filter((product) => product.id === id);
    setForm({
      price: filteredProduct[0].price,
      title: filteredProduct[0].title,
      description: filteredProduct[0].description,
      id: filteredProduct[0].id,
    });
    setIsModalOpen(true);
  };

  return {
    products,
    form,
    isModalOpen,
    modalType,
    setForm,
    deleteProduct,
    addProduct,
    editProduct,
    setIsModalOpen,
    setModalType,
    setProducts,
  };
}
