import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [form, setForm] = useState({
    price: "",
    title: "",
    description: "",
  });

  const API_URL = "http://localhost:3000/products";

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (modalType === "new") {
      const newProduct = {
        id: uuidv4(),
        title: form.title,
        price: form.price,
        description: form.description,
        image: "https://via.placeholder.com/150/92c952",
      };

      try {
        await axios.post(API_URL, newProduct);
        setProducts((prevProducts) => [...prevProducts, newProduct]);
        setIsModalOpen(false);
      } catch (error) {
        console.error("Error creating product", error);
      }
    }

    if (modalType === "edit") {
      const findProduct = products.find((product) => product.id === form.id);
      const updatedProduct = {
        ...findProduct,
        title: form.title,
        price: form.price,
        description: form.description,
      };
      try {
        await axios.put(`${API_URL}/${form.id}`, updatedProduct);
        setProducts((prevProducts) => {
          const newProducts = prevProducts.map((product) => {
            if (product.id === form.id) {
              return updatedProduct;
            }
            return product;
          });
          return newProducts;
        });
        setIsModalOpen(false);
      } catch (error) {
        console.error("Error updating product", error);
      }
    }
  };

  const addProduct = () => {
    setIsModalOpen(true);
    setForm({
      price: "",
      title: "",
      description: "",
    });
  };

  const editProduct = (id) => {
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
    handleSubmitForm,
  };
}
