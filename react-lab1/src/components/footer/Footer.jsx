import "./Footer.css";
import { UserContext } from "../../contextos/UserContext";
import { useContext } from "react";

export default function Footer() {
  const { user } = useContext(UserContext);
  return (
    <footer
      className={`footer-container ${user.isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="footer-details">
        <ul>
          <li>Contacto</li>
          <li>Email: email.com</li>
          <li>Teléfono</li>
        </ul>
        <ul>
          <li>Redes Sociales</li>
          <li>Facebook</li>
          <li>Twiter</li>
          <li>Instagram</li>
        </ul>
        <ul>
          <li>Dirección</li>
          <li>Calle: Lejana 11</li>
          <li>Ciudad: País</li>
        </ul>
      </div>
      <p>© 2023 MiTienda todos los derechos reservados</p>
    </footer>
  );
}
