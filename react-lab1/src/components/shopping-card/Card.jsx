/* eslint-disable react/prop-types */
import "./Card.css";

export default function Card({ product }) {
  const { image, title, price, quantity } = product;
  return (
    <div className="shopping-card-container">
      <div className="notification-cicle-card-container">
        <img
          className="shopping-card-image"
          src={image}
          alt={title}
        />
        <span className="notification-cicle-card">{quantity}</span>
      </div>
      <div className="shopping-card-body">
        <p>{title}</p>
        <p>Precio por unidad: {price}€</p>
        <p>{price * quantity}€</p>
      </div>
    </div>
  );
}
