/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";
import "./MainContent.css";
import data from "../../assets/data.json";

export default function MainContent({ searchInputValue }) {
  function filterProducts() {
    if (searchInputValue === "") {
      return data;
    } else {
      return data.filter((product) =>
        product.title.toLowerCase().includes(searchInputValue.toLowerCase())
      );
    }
  }
  const mapeo = filterProducts().map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return <main className="main-container">{mapeo}</main>;
}
