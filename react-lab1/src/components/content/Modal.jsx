/* eslint-disable react/prop-types */
import "./Modal.css";
import { XCircle } from "react-feather";
import { useForm } from "react-hook-form";

export default function Modal({
  setIsModalOpen,
  form,
  modalType,
  handleSubmitForm,
}) {
  const {
    register,
    formState: { errors },
    trigger,
    handleSubmit,
  } = useForm({ defaultValues: form });

  const onSubmit = (formData) => {
    handleSubmitForm(formData);
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
          onSubmit={handleSubmit(onSubmit)}
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
              maxLength: {
                value: 40,
                message: "El título no puede tener más de 40 caracteres",
              },
              minLength: {
                value: 5,
                message: "El título no puede tener menos de 5 caracteres",
              },
            })}
          />
          <label htmlFor="price">Price</label>
          {errors.price && (
            <p className="modal-form-error-msg">{errors.price.message}</p>
          )}
          <input
            type="number"
            id="price"
            {...register("price", {
              required: "Por favor, ingrese un precio",
              min: {
                value: 0.01,
                message: "El precio no puede ser menor a 0.01",
              },
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
            {...register("description", {
              required: "Por favor, ingrese una descripción",
              maxLength: {
                value: 200,
                message: "La descripción no puede tener más de 200 caracteres",
              },
              minLength: {
                value: 10,
                message: "La descripción no puede tener menos de 10 caracteres",
              },
              onBlur: () => trigger("description"),
            })}
          />
          <label htmlFor="category">Category</label>
          {errors.category && (
            <p className="modal-form-error-msg">{errors.category.message}</p>
          )}
          <input
            type="text"
            id="category"
            {...register("category", {
              required: "Please enter a category",
              maxLength: {
                value: 20,
                message: "The category cannot have more than 40 characters",
              },
              minLength: {
                value: 3,
                message: "The category cannot have less than 5 characters",
              },
              onBlur: () => trigger("category"),
            })}
          />

          <label htmlFor="image">Image</label>
          {errors.image && (
            <p className="modal-form-error-msg">{errors.image.message}</p>
          )}
          <input
            type="text"
            id="image"
            {...register("image", {
              required: "Please enter an image URL",
              validate: (value) => {
                let pattern = new RegExp(
                  "^(https?:\\/\\/)?" + // protocol
                    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name and extension
                    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
                    "(\\:\\d+)?" + // port
                    "(\\/[-a-z\\d%_.~+]*)*" + // path
                    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
                    "(\\#[-a-z\\d_]*)?$",
                  "i"
                ); // fragment locator
                return !!pattern.test(value) || "Please enter a valid URL";
              },
              onBlur: () => trigger("image"),
            })}
          />
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
}
