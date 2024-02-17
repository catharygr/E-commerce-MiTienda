import data from "../assets/data.json";
import { useState } from "react";

export default function useProduct() {
  const [products, setProducts] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    price: "Caty",
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
    });
    setIsModalOpen(true);
  };

  return {
    products,
    form,
    isModalOpen,
    setForm,
    deleteProduct,
    addProduct,
    editProduct,
    setIsModalOpen,
  };
}
