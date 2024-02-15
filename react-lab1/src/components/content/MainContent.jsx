/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";
import "./MainContent.css";
import data from "../../assets/data.json";
import { useSearchParams } from "react-router-dom";

export default function MainContent() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  function filterProducts() {
    if (!search) {
      return data;
    } else {
      return data.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
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
