import "./ProductDetails.css";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../contextos/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { getAllProducts } from "../../redux/reducers/productsReducer.js";

export default function ProductDetails() {
  const products = useSelector(getAllProducts);
  const { user, setUser } = useContext(UserContext);
  const { id } = useParams();

  const hadleAddToCart = () => {
    setUser({
      ...user,
      shoppingCartItems: [...user.shoppingCartItems, findProduct.id],
    });
  };

  const findProduct = products.products.find(
    (product) => product.id.toString() === id.toString()
  );
  const { title, price, description, image, category } = findProduct;

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
