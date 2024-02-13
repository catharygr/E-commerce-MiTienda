import "./Promotion.css";
import { UserContext } from "../../contextos/UserContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

export default function Promotion() {
  const { user } = useContext(UserContext);
  console.log(user);
  const location = useLocation();
  const route = location.pathname.split("/")[1];
  console.log(route);

  const banner = () => {
    if (user.isLogged && route === "") {
      return <p>{user.name}, aprovéchate de tu 20% de descuento!</p>;
    } else if (!user.isLogged && route === "cart") {
      return <p>Crea una cuenta para disfrutar de nuestros descuentos</p>;
    } else if (user.isLogged && route === "cart") {
      return <p>{user.name}, los 20% se aplicarán al final de la compra</p>;
    } else {
      return <p>¡20% de descuento para nuevos clientes!</p>;
    }
  };
  return <div className="promotion">{banner()}</div>;
}
