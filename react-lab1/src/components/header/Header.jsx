/* eslint-disable react/prop-types */
import HeaderMenu from "./HeaderMenu";
import HeaderAccountMenu from "./HeaderAccountMenu";
import { useState } from "react";
import { Search } from "react-feather";
import { UserContext } from "../../contextos/UserContext";
import { useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [formValue, setFormValue] = useState("");
  const [, setSearchParams] = useSearchParams();
  const { user } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ search: formValue });
  };
  return (
    <header
      className={`header-container ${user.isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <Link to="/">
        <h1 className={user.isLogged ? "logged-in-title" : ""}>MiTienda</h1>
      </Link>
      <HeaderMenu />
      <form onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Buscar productos"
          name="search"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button
          className="header-btn"
          type="submit"
        >
          <Search size={18} />
        </button>
      </form>
      <HeaderAccountMenu />
    </header>
  );
}
