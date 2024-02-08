import "./Promotion.css";
import { UserContext } from "../../contextos/UserContext";
import { RouterContext } from "../../contextos/RouterContext";
import { useContext } from "react";

export default function Promotion() {
  const { user } = useContext(UserContext);
  const { route } = useContext(RouterContext);

  const banner = () => {
    if (user.isLogged && route === "content") {
      return <p>¡{user.name} aprovéchate de tu 20% de descuento!</p>;
    } else if (!user.isLogged && route === "shopping-cart") {
      return <p>Crea una cuenta para disfrutar de nuestros descuentos</p>;
    } else if (user.isLogged && route === "shopping-cart") {
      return <p>{user.name} los 20% se aplicarán al final de la compra</p>;
    } else {
      return <p>¡20% de descuento para nuevos clientes!</p>;
    }
  };
  return <div className="promotion">{banner()}</div>;
}
