/* eslint-disable react/prop-types */
import HeaderMenu from "./HeaderMenu";
import HeaderAccountMenu from "./HeaderAccountMenu";
import { useState } from "react";
import { Search } from "react-feather";
import { UserContext } from "../../contextos/UserContext";
import { useContext } from "react";
import "./Header.css";

export default function Header() {
  const [formValue, setFormValue] = useState("");
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser((prev) => ({ ...prev, searchValue: formValue }));
    setFormValue("");
  };
  return (
    <header
      className={`header-container ${user.isDarkMode ? "dark-mode" : "light-mode"}`}
    >
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
