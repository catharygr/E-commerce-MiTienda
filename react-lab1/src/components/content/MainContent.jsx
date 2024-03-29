import ProductCard from "./ProductCard";
import "./MainContent.css";
import { useSearchParams } from "react-router-dom";
import Modal from "./Modal";
import useProducts from "../../custom-hooks/useProducts";
import { UserContext } from "../../contextos/UserContext";
import { useContext } from "react";
import { getAllProducts } from "../../redux/reducers/productsReducer";
import { useSelector } from "react-redux";

export default function MainContent() {
  const products = useSelector(getAllProducts);
  const { user } = useContext(UserContext);
  const {
    form,
    isModalOpen,
    modalType,
    setForm,
    setIsModalOpen,
    setModalType,
    openEditProductModal,
    handleSubmitForm,
  } = useProducts();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  if (!products) return;

  const handleNewProductModal = () => {
    setForm({
      title: "",
      price: "",
      description: "",
      category: "",
      image: "https://placehold.co/300x200/orange/white",
    });
    setModalType("new");
    setIsModalOpen(true);
  };

  function filterProducts(data) {
    if (!search) {
      return data;
    } else {
      return data.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }
  }

  const mapeo = filterProducts(products).map((product) => (
    <ProductCard
      key={product.id}
      setIsModalOpen={setIsModalOpen}
      product={product}
      openEditProductModal={openEditProductModal}
      form={form}
      setModalType={setModalType}
    />
  ));

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
          modalType={modalType}
          setIsModalOpen={setIsModalOpen}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </>
  );
}
