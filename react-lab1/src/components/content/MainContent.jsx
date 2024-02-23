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
import { getAllProducts } from "../../redux/reducers/productsReducer";
import { useSelector } from "react-redux";

export default function MainContent() {
  const products = useSelector(getAllProducts);

  const { user } = useContext(UserContext);
  const {
    form,
    isModalOpen,
    // products,
    modalType,
    setForm,
    setIsModalOpen,
    setModalType,
    setProducts,
    deleteProduct,
    addProduct,
    openEditProductModal,
    handleSubmitForm,
    isLoading,
    error,
    setError,
  } = useProducts();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  function filterProducts(data) {
    if (!search) {
      return data.products;
    } else {
      return data.products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }
  }

  const handleNewProductModal = () => {
    setForm({
      title: "",
      price: "",
      description: "",
    });
    setModalType("new");
    setIsModalOpen(true);
  };

  const mapeo = filterProducts(products).map((product) => (
    <ProductCard
      key={product.id}
      setIsModalOpen={setIsModalOpen}
      product={product}
      deleteProduct={deleteProduct}
      addProduct={addProduct}
      openEditProductModal={openEditProductModal}
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
          onClick={handleNewProductModal}
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
