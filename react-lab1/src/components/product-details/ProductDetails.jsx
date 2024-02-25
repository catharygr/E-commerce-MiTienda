import "./ProductDetails.css";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../contextos/UserContext";
import { useContext } from "react";
// import axios from "axios";
// import Loader from "../loader/Loader";
import { useSelector } from "react-redux";
import { getAllProducts } from "../../redux/reducers/productsReducer.js";

export default function ProductDetails() {
  const products = useSelector(getAllProducts);
  const { user, setUser } = useContext(UserContext);
  const { id } = useParams();
  // const [isLoading, isSetLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [products, setProducts] = useState([]);

  const hadleAddToCart = () => {
    setUser({
      ...user,
      shoppingCartItems: [...user.shoppingCartItems, findProduct.id],
    });
  };

  // const API_URL = "http://localhost:3000/products";

  // useEffect(() => {
  //   isSetLoading(true);
  //   const getProducts = async () => {
  //     try {
  //       const response = await axios.get(API_URL);
  //       setProducts(response.data);
  //     } catch (error) {
  //       if (error.response && error.response.status === 404) {
  //         setError("No products");
  //       } else {
  //         setError("Error fetching products");
  //       }
  //     } finally {
  //       setTimeout(() => {
  //         isSetLoading(false);
  //       }, 1000);
  //     }
  //   };
  //   getProducts();
  // }, []);

  // useEffect(() => {
  //   if (error) {
  //     alert("Error loading products");
  //     setError(null);
  //   }
  // }, [error]);

  // if (isLoading) {
  //   return <Loader />;
  // }
  const findProduct = products.products.find(
    (product) => product.id.toString() === id.toString()
  );
  const { title, price, description, image, category } = findProduct;

  return (
    <main className="product-details-container">
      <img
        src={image}
        alt={title}
      />
      <div className="product-details-description">
        <Link to="/">Volver</Link>
        <h2>{title}</h2>
        <p className="product-details-price">{price}€</p>
        <p>{description}</p>
        <p className="product-details-category">Category: {category}</p>
        <button
          onClick={hadleAddToCart}
          className="product-details-btn"
        >
          Agregar al carrito
        </button>
      </div>
    </main>
  );
}
