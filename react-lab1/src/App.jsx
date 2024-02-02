import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Promotion from "./components/content/Promotion";
import MainContent from "./components/content/MainContent";
import { useState } from "react";

function App() {
  const [searchInputValue, setSearchInputValue] = useState("");
  console.log(searchInputValue);
  return (
    <>
      <Header setSearchInputValue={setSearchInputValue} />
      <Promotion />
      <MainContent searchInputValue={searchInputValue} />
      <Footer />
    </>
  );
}

export default App;
