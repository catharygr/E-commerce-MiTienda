import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import axios from "axios";
import { useDispatch } from "react-redux";
import {
  addProduct,
  removeProduct,
  updateProduct,
} from "../redux/actions/index.js";
import { useSelector } from "react-redux";
import { getAllProducts } from "../redux/reducers/productsReducer.js";

export default function useProducts() {
  const products = useSelector(getAllProducts);

  // const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [form, setForm] = useState({
    price: "",
    title: "",
    description: "",
  });
  const [isLoading, isSetLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  // const API_URL = "http://localhost:3000/products";

  // useEffect(() => {
  //   isSetLoading(true);
  //   const getProducts = async () => {
  //     try {
  //       const response = await axios.get(API_URL);
  //       setProducts(response.data);
  //     } catch (error) {
  //       if (error.response && error.response.status === 404) {
  //         setError("No products");
  //       } else {
  //         setError("Error fetching products");
  //       }
  //     } finally {
  //       setTimeout(() => {
  //         isSetLoading(false);
  //       }, 1000);
  //     }
  //   };
  //   getProducts();
  // }, []);

  // Función que se ejecuta en el formulario del modal - onSubmit
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
        // await axios.post(API_URL, newProduct);
        // setProducts((prevProducts) => [...prevProducts, newProduct]);
        dispatch(addProduct(newProduct));
        addProduct(newProduct);
        setIsModalOpen(false);
      } catch (error) {
        console.error("Error creating product", error);
      }
    }

    if (modalType === "edit") {
      const findProduct = products.products.find(
        (product) => product.id.toString() === form.id.toString()
      );
      const editedProduct = {
        ...findProduct,
        title: form.title,
        price: form.price,
        description: form.description,
      };
      try {
        // await axios.put(`${API_URL}/${form.id}`, updatedProduct);
        // setProducts((prevProducts) => {
        //   const newProducts = prevProducts.map((product) => {
        //     if (product.id === form.id) {
        //       return editedProduct;
        //     }
        //     return product;
        //   });
        //   return newProducts;
        // });
        dispatch(updateProduct(editedProduct));
        setIsModalOpen(false);
      } catch (error) {
        console.error("Error updating product", error);
      }
    }
  };

  // Tres funciones que se ejecuatn en los botones de agregar, editar y eliminar del ProductCard y abre el modal
  // const addProduct = () => {
  //   // setIsModalOpen(true);
  //   // setForm({
  //   //   price: "",
  //   //   title: "",
  //   //   description: "",
  //   // });
  // };

  const openEditProductModal = (id) => {
    const filteredProduct = products.products.filter(
      (product) => product.id.toString() === id.toString()
    );
    setForm({
      price: filteredProduct[0].price,
      title: filteredProduct[0].title,
      description: filteredProduct[0].description,
      id: filteredProduct[0].id,
    });
    setIsModalOpen(true);
  };

  const deleteProduct = async (id) => {
    try {
      // await axios.delete(`${API_URL}/${id}`);
      dispatch(removeProduct(id));
      // setProducts((prevProducts) =>
      //   prevProducts.filter((product) => product.id !== id)
      // );
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  return {
    products,
    form,
    isModalOpen,
    modalType,
    isLoading,
    error,
    setError,
    setForm,
    deleteProduct,
    addProduct,
    openEditProductModal,
    setIsModalOpen,
    setModalType,
    // setProducts,
    handleSubmitForm,
  };
}
