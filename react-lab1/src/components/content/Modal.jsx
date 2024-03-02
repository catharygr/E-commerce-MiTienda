/* eslint-disable react/prop-types */
import "./Modal.css";
import { XCircle } from "react-feather";

export default function Modal({
  setIsModalOpen,
  // form,
  // setForm,
  modalType,
  handleSubmitForm,
  register,
  handleSubmit,
  watch,
  errors,
  trigger,
}) {
  const onSubmit = handleSubmit((form) => {
    console.log(form);
    handleSubmitForm(form);
  });
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
          onSubmit={onSubmit}
          className="form-modal-container"
        >
          <label htmlFor="title">Title</label>
          {errors.title && (
            <p className="modal-form-error-msg">{errors.title.message}</p>
          )}
          <input
            type="text"
            id="title"
            {...register("title", {
              required: "Por favor, ingrese un título",
              onBlur: () => trigger("title"),
            })}
            // name="title"
            // value={form.title}
            // onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <label htmlFor="price">Price</label>
          {errors.price && (
            <p className="modal-form-error-msg">{errors.price.message}</p>
          )}
          <input
            type="text"
            id="price"
            // name="price"
            // value={form.price}
            // onChange={(e) => setForm({ ...form, price: e.target.value })}
            {...register("price", {
              required: "Por favor, ingrese un precio",
              onBlur: () => trigger("price"),
            })}
          />
          <label htmlFor="description">Description</label>
          {errors.description && (
            <p className="modal-form-error-msg">{errors.description.message}</p>
          )}
          <textarea
            type="text"
            id="description"
            // name="description"
            // value={form.description}
            // onChange={(e) => setForm({ ...form, description: e.target.value })}
            {...register("description", {
              required: "Por favor, ingrese una descripción",
              onBlur: () => trigger("description"),
            })}
          />
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
}
