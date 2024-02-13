import "./Promotion.css";
import { UserContext } from "../../contextos/UserContext";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Promotion() {
  const { user } = useContext(UserContext);
  console.log(user);
  const location = useLocation();
  const route = location.pathname.split("/")[1];
  const [banner, setBanner] = useState("");

  useEffect(() => {
    let newBanner = "";
    if (user.isLogged && route === "") {
      newBanner = <p>{user.name}, aprovéchate de tu 20% de descuento!</p>;
    } else if (!user.isLogged && route === "cart") {
      newBanner = <p>Crea una cuenta para disfrutar de nuestros descuentos</p>;
    } else if (user.isLogged && route === "cart") {
      newBanner = (
        <p>{user.name}, los 20% se aplicarán al final de la compra</p>
      );
    } else {
      newBanner = <p>¡20% de descuento para nuevos clientes!</p>;
    }
    setBanner(newBanner);
  }, [user, route]);

  return <div className="promotion">{banner}</div>;
}
