/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";
import "./MainContent.css";
import { useSearchParams } from "react-router-dom";
import Modal from "./Modal";
import useProduct from "../../custom-hooks/useProduct";
import { UserContext } from "../../contextos/UserContext";
import { useContext } from "react";

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
  } = useProduct();
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

  return (
    <>
      <main className="main-container">{mapeo}</main>;
      {user.role === "admin" && isModalOpen && (
        <Modal
          form={form}
          setForm={setForm}
          setProducts={setProducts}
          modalType={modalType}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
}
