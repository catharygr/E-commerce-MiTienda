/* eslint-disable react/prop-types */
import "./Modal.css";
import { XCircle } from "react-feather";
import { v4 as uuidv4 } from "uuid";

export default function Modal({
  setIsModalOpen,
  form,
  setForm,
  modalType,
  setProducts,
}) {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (modalType === "new") {
      setProducts((prevProducts) => {
        const newProduct = {
          id: uuidv4(),
          title: form.title,
          price: form.price,
          description: form.description,
          image: "https://via.placeholder.com/150/92c952",
        };
        return [...prevProducts, newProduct];
      });
      setIsModalOpen(false);
    }

    if (modalType === "edit") {
      setProducts((prevProducts) => {
        const newProducts = prevProducts.map((product) => {
          if (product.id === form.id) {
            return {
              ...product,
              title: form.title,
              price: form.price,
              description: form.description,
            };
          }
          return product;
        });
        return newProducts;
      });
      setIsModalOpen(false);
    }
  };
  return (
    <div className="edit-modal">
      <div className="edit-modal-content">
        <button
          onClick={() => setIsModalOpen(false)}
          className="edit-modal-close-btn"
        >
          <XCircle />
        </button>
        {modalType === "new" ? (
          <h2>Nuevo Producto</h2>
        ) : (
          <h2>Modificar Producto</h2>
        )}
        <form
          onSubmit={handleSubmitForm}
          className="form-modal-container"
        >
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            id="description"
            name="description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
}
