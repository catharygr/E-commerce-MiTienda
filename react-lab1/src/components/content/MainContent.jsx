/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";
import { UserContext } from "../../contextos/UserContext";
import { useContext } from "react";
import "./MainContent.css";
import data from "../../assets/data.json";

export default function MainContent() {
  const { user } = useContext(UserContext);
  function filterProducts() {
    if (user.searchValue === "") {
      return data;
    } else {
      return data.filter((product) =>
        product.title.toLowerCase().includes(user.searchValue.toLowerCase())
      );
    }
  }
  const mapeo = filterProducts().map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
  ));

  return <main className="main-container">{mapeo}</main>;
}
