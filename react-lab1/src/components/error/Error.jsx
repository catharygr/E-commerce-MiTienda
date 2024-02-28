/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Error.css";

export default function Error({ error }) {
  return (
    <div className="error-container">
      <h1>Error: {error}</h1>
      <p>Página no encontrada</p>
      <Link
        className="error-link"
        to="/"
      >
        Volver a la página principal
      </Link>
    </div>
  );
}
