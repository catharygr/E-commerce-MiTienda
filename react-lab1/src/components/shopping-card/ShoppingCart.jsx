import "./ShoppingCart.css";
import Card from "./Card";
import data from "../../assets/data.json";
import { UserContext } from "../../contextos/UserContext";
import { useContext } from "react";

export default function ShoppingCart() {
  const { user } = useContext(UserContext);

  const productCounter = {};
  user.shoppingCartItems.forEach((id) => {
    productCounter[id] = productCounter[id] ? productCounter[id] + 1 : 1;
  });
  const mapeo = Object.keys(productCounter).map((id) => {
    const product = data.find((product) => product.id === Number(id));
    return {
      ...product,
      quantity: productCounter[id],
    };
  });

  const total = mapeo.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

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
      <p className="total">Total a Pagar: {total.toFixed(2)}€</p>
      <div className="cart-btn-container">
        <button className="btn-comprar">Comprar</button>
        <button className="btn-resetear">Resetear Carro</button>
      </div>
    </main>
  );
}
