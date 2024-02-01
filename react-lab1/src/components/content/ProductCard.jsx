/* eslint-disable react/prop-types */
export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p>{product.description}</p>
        <p className="card-price">{product.price}€</p>
      </div>
    </div>
  );
}
