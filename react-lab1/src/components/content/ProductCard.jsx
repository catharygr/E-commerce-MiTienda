/* eslint-disable react/prop-types */
import "./ProductCard.css";
import { UserContext } from "../../contextos/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { user, setUser } = useContext(UserContext);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setUser({
      ...user,
      shoppingCartItems: [...user.shoppingCartItems, product.id],
    });
  };
  return (
    <Link to={`/product/${product.id}`}>
      <div className="product-card">
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
      </div>
    </Link>
  );
}
