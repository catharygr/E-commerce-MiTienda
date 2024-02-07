import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Promotion from "./components/content/Promotion";
import MainContent from "./components/content/MainContent";
import { useState, useContext } from "react";
import LoginForm from "./components/login/LoginForm";
import ShoppingCart from "./components/shopping-card/ShoppingCart";
import { RouterContext } from "./contextos/RouterContext";

function App() {
  const [searchInputValue, setSearchInputValue] = useState("");
  // content, shopping-cart
  const { route, setRoute } = useContext(RouterContext);

  return (
    <>
      <Header
        setSearchInputValue={setSearchInputValue}
        setRoute={setRoute}
      />
      <Promotion />
      {route === "shopping-cart" && <ShoppingCart />}
      {route === "content" && (
        <MainContent searchInputValue={searchInputValue} />
      )}
      <LoginForm />
      <Footer />
    </>
  );
}

export default App;
