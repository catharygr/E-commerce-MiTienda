/* eslint-disable react/prop-types */
import HeaderMenu from "./HeaderMenu";
import HeaderAccountMenu from "./HeaderAccountMenu";
import { useState } from "react";
import { Search } from "react-feather";
import "./Header.css";

export default function Header({ setSearchInputValue }) {
  const [formValue, setFormValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchInputValue(formValue);
    console.log(formValue);
  };
  return (
    <header className="header-container">
      <h1>MiTienda</h1>
      <HeaderMenu />
      <form onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Buscar productos"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button className="header-btn" type="submit">
          <Search size={18} />
        </button>
      </form>
      <HeaderAccountMenu />
    </header>
  );
}
