/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";
import "./MainContent.css";
import { useSearchParams } from "react-router-dom";
import Modal from "./Modal";
import useProduct from "../../custom-hooks/useProduct";

export default function MainContent() {
  const {
    form,
    isModalOpen,
    products,
    modalType,
    setIsModalOpen,
    setModalType,
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
      {isModalOpen && (
        <Modal
          form={form}
          modalType={modalType}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
}
