/* eslint-disable react/prop-types */
import "./ProductCard.css";
import { UserContext } from "../../contextos/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Edit2, Trash2 } from "react-feather";
// import useProductActions from "../../custom-hooks/useProductActions";
import { revomeProductThunk } from "../../redux/reducers/productsReducer";
import { useDispatch } from "react-redux";
export default function ProductCard({
  product,
  openEditProductModal,
  setModalType,
}) {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { removeProductMiddleware } = useProductActions();

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

  const handleEditProduct = (e) => {
    e.stopPropagation();
    openEditProductModal(product.id);
    setModalType("edit");
  };

  const handleDeleteProduct = (e) => {
    e.stopPropagation();
    // removeProductMiddleware(product.id);
    dispatch(revomeProductThunk(product.id));
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
      {user.role === "admin" && (
        <div className="edit-delete-btn">
          <button onClick={handleEditProduct}>
            <Edit2 />
          </button>
          <button onClick={handleDeleteProduct}>
            <Trash2 color={"red"} />
          </button>
        </div>
      )}
    </div>
  );
}
