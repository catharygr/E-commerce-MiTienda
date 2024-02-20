import "./ProductDetails.css";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../contextos/UserContext";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import Loader from "../loader/Loader";

export default function ProductDetails() {
  const { user, setUser } = useContext(UserContext);
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, isSetLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(findProduct);
  const hadleAddToCart = () => {
    if (findProduct) {
      setUser({
        ...user,
        shoppingCartItems: [...user.shoppingCartItems, findProduct.id],
      });
    }
  };

  const API_URL = "http://localhost:3000/products";

  useEffect(() => {
    isSetLoading(true);
    const getProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        setProducts(response.data);

        const findProduct = products.find(
          (product) => product.id === Number(id)
        );
        let title, price, description, image, category;

        if (findProduct) {
          ({ title, price, description, image, category } = findProduct);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError("No products");
        } else {
          setError("Error fetching products");
        }
      } finally {
        setTimeout(() => {
          isSetLoading(false);
        }, 1000);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    if (error) {
      alert("Error loading products");
      setError(null);
    }
  }, [error]);

  if (isLoading) {
    return <Loader />;
  }

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
