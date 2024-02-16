/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";
import "./MainContent.css";
import data from "../../assets/data.json";
import { useSearchParams } from "react-router-dom";
import Modal from "./Modal";
import useProduct from "../../custom-hooks/useProduct";

export default function MainContent() {
  const {
    form,
    isModalOpen,
    setIsModalOpen,
    deleteProduct,
    addProduct,
    editProduct,
  } = useProduct();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  function filterProducts() {
    if (!search) {
      return data;
    } else {
      return data.filter((product) =>
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
    />
  ));

  return (
    <>
      <main className="main-container">{mapeo}</main>;
      {isModalOpen && (
        <Modal
          form={form}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
}
