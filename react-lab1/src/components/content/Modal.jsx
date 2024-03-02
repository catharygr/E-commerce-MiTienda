/* eslint-disable react/prop-types */
import "./Modal.css";
import { XCircle } from "react-feather";

export default function Modal({
  setIsModalOpen,
  form,
  setForm,
  modalType,
  handleSubmitForm,
  register,
  handleSubmit,
  watch,
  errors,
  trigger,
}) {
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
