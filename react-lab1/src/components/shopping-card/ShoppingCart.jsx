import "./ShoppingCart.css";
import Card from "./Card";
import { UserContext } from "../../contextos/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { getAllProducts } from "../../redux/reducers/productsReducer.js";

export default function ShoppingCart() {
  const products = useSelector(getAllProducts);
  const { user, setUser } = useContext(UserContext);

  const productCounter = {};
  user.shoppingCartItems.forEach((id) => {
    productCounter[id] = productCounter[id] ? productCounter[id] + 1 : 1;
  });
  const mapeo = Object.keys(productCounter).map((id) => {
    const product = products.products?.find(
      (product) => product.id.toString() === id.toString()
    );
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
