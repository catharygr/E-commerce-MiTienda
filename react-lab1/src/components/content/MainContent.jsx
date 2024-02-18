/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";
import "./MainContent.css";
import { useSearchParams } from "react-router-dom";
import Modal from "./Modal";
import useProducts from "../../custom-hooks/useProducts";
import { UserContext } from "../../contextos/UserContext";
import { useContext, useEffect } from "react";
import Loader from "../loader/Loader";

export default function MainContent() {
  const { user } = useContext(UserContext);
  const {
    form,
    isModalOpen,
    products,
    modalType,
    setForm,
    setIsModalOpen,
    setModalType,
    setProducts,
    deleteProduct,
    addProduct,
    editProduct,
    handleSubmitForm,
    isLoading,
    error,
    setError,
  } = useProducts();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  function filterProducts() {
    if (!search) {
      return products;
    } else {
      return products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }
  }

  const handleNewProduct = (e) => {
    e.stopPropagation();
    addProduct();
    setModalType("new");
  };

  const mapeo = filterProducts().map((product) => (
    <ProductCard
      key={product.id}
      setIsModalOpen={setIsModalOpen}
      product={product}
      deleteProduct={deleteProduct}
      addProduct={addProduct}
      editProduct={editProduct}
      form={form}
      setModalType={setModalType}
    />
  ));

  useEffect(() => {
    if (error) {
      alert("Error loading products");
      setError(null);
    }
  }, [error]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <main className="main-container">{mapeo}</main>
      {user.role === "admin" && (
        <button
          onClick={handleNewProduct}
          className="new-item-btn"
        >
          Add New Product
        </button>
      )}
      {user.role === "admin" && isModalOpen && (
        <Modal
          form={form}
          setForm={setForm}
          setProducts={setProducts}
          modalType={modalType}
          setIsModalOpen={setIsModalOpen}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </>
  );
}
