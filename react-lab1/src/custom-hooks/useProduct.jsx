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
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  };

  const addProduct = () => {
    console.log("Adding product");
    setForm({
      price: "",
      title: "",
      description: "",
    });
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
    deleteProduct,
    addProduct,
    editProduct,
    setIsModalOpen,
  };
}
