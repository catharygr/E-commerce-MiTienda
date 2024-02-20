import "./ShoppingCart.css";
import Card from "./Card";
import { UserContext } from "../../contextos/UserContext";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import Loader from "../loader/Loader";

export default function ShoppingCart() {
  const { user, setUser } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [isLoading, isSetLoading] = useState(true);
  const [error, setError] = useState(null);

  const productCounter = {};
  user.shoppingCartItems.forEach((id) => {
    productCounter[id] = productCounter[id] ? productCounter[id] + 1 : 1;
  });
  const mapeo = Object.keys(productCounter).map((id) => {
    const product = products.find((product) => product.id === id);
    return {
      ...product,
      quantity: productCounter[id],
    };
  });

  const total = mapeo.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const handleCheckout = () => {
    alert("Serás redirigido a la pasarela de pago");
    setUser({ ...user, shoppingCartItems: [] });
  };

  const handleReset = () => {
    setUser({ ...user, shoppingCartItems: [] });
  };

  const API_URL = "http://localhost:3000/products";

  useEffect(() => {
    isSetLoading(true);
    const getProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        setProducts(response.data);
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
    <main className="shopping-cart-container">
      <h2>Carrito de Compras</h2>
      {mapeo.map((product) => {
        return (
          <Card
            key={product.id}
            product={product}
          />
        );
      })}

      <p className="total">Total a Pagar: {Number(total)?.toFixed(2)}€</p>

      <div className="cart-btn-container">
        <button
          onClick={handleCheckout}
          className="btn-comprar"
        >
          Comprar
        </button>
        <button
          onClick={handleReset}
          className="btn-resetear"
        >
          Resetear Carro
        </button>
      </div>
    </main>
  );
}
