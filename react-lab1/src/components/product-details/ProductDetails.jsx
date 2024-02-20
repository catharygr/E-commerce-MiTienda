import "./ProductDetails.css";
import { Link, useParams } from "react-router-dom";
import data from "../../assets/data.json";
import { UserContext } from "../../contextos/UserContext";
import { useContext } from "react";

export default function ProductDetails() {
  const { user, setUser } = useContext(UserContext);
  const { id } = useParams();

  const findProduct = data.find((product) => product.id === Number(id));
  const { title, price, description, image, category } = findProduct;

  const hadleAddToCart = () => {
    setUser({
      ...user,
      shoppingCartItems: [...user.shoppingCartItems, findProduct.id],
    });
  };

  return (
    <main className="product-details-container">
      <img
        src={image}
        alt={title}
      />
      <div className="product-details-description">
        <Link to="/">Volver</Link>
        <h2>{title}</h2>
        <p className="product-details-price">{price}€</p>
        <p>{description}</p>
        <p className="product-details-category">Category: {category}</p>
        <button
          onClick={hadleAddToCart}
          className="product-details-btn"
        >
          Agregar al carrito
        </button>
      </div>
    </main>
  );
}
