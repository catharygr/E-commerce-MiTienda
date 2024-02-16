/* eslint-disable react/prop-types */
import "./Modal.css";
import { XCircle } from "react-feather";

export default function Modal({ setIsModalOpen, form, setForm }) {
  const handleChanges = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
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
        <h2>Modificar Producto</h2>
        <form className="form-modal">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={form.title}
            onChange={handleChanges}
            placeholder="Title"
          />
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={form.price}
            onChange={handleChanges}
            placeholder="Price"
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={form.description}
            onChange={handleChanges}
            placeholder="Description"
          />
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
}
