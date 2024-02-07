import "./Promotion.css";
import { UserContext } from "../../contextos/UserContext";
import { useContext } from "react";

export default function Promotion() {
  const { user } = useContext(UserContext);
  return (
    <div className="promotion">
      {!user.isLogged ? (
        <p>¡20% de descuento para nuevos clientes!</p>
      ) : (
        <p>¡{user.name}, aprovéchate de tu 20% de descuento!</p>
      )}
    </div>
  );
}
