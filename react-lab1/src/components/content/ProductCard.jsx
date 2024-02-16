/* eslint-disable react/prop-types */
import "./ProductCard.css";
import { UserContext } from "../../contextos/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Edit2, Trash2 } from "react-feather";

export default function ProductCard({
  product,
  deleteProduct,
  addProduct,
  editProduct,
}) {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setUser({
      ...user,
      shoppingCartItems: [...user.shoppingCartItems, product.id],
    });
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleNewProduct = (e) => {
    e.stopPropagation();
    addProduct();
  };

  const handleEditProduct = (e) => {
    e.stopPropagation();
    editProduct(product.id);
  };

  const handleDeleteProduct = (e) => {
    e.stopPropagation();
    deleteProduct(product.id);
  };

  return (
    <div
      onClick={handleCardClick}
      className="product-card"
    >
      <img
        className="card-img"
        src={product.image}
        alt={product.title}
      />
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-description">{product.description}</p>
        <p className="card-price">{product.price}€</p>
      </div>

      {user.isLogged && (
        <button
          onClick={handleAddToCart}
          className="card-btn"
        >
          Agregar carrito
        </button>
      )}
      <div className="edit-delete-btn">
        <button onClick={handleEditProduct}>
          <Edit2 />
        </button>
        <button onClick={handleDeleteProduct}>
          <Trash2 color={"red"} />
        </button>
      </div>
      <button
        onClick={handleNewProduct}
        className="new-item-btn"
      >
        Add new Product
      </button>
    </div>
  );
}
