/* eslint-disable react/prop-types */
import "./Card.css";

export default function Card({ product }) {
  const { image, title, price } = product;
  return (
    <div className="shopping-card-container">
      <div className="notification-cicle-card-container">
        <img
          className="shopping-card-image"
          src={image}
          alt={title}
        />
        <span className="notification-cicle-card">5</span>
      </div>
      <div className="shopping-card-body">
        <p>{title}</p>
        <p>Precio por unidad: {price}</p>
        <p>Precio total: $345.20</p>
      </div>
    </div>
  );
}
