import HeaderMenu from "./HeaderMenu";
import HeaderAccountMenu from "./HeaderAccountMenu";
import "./Header.css";

export default function Header() {
  return (
    <header className="header-container">
      <h1>MiTienda</h1>
      <HeaderMenu />
      <form>
        <input
          className="search-input"
          type="text"
          placeholder="Buscar productos"
        />
        <button type="submit">Buscar</button>
      </form>
      <HeaderAccountMenu />
    </header>
  );
}
