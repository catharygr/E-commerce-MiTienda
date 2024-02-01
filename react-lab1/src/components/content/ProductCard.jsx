/* eslint-disable react/prop-types */
export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p className="price">{product.price}€</p>
      </div>
    </div>
  );
}
