import HeaderMenu from "./HeaderMenu";
import HeaderAccountMenu from "./HeaderAccountMenu";

export default function Header() {
  return (
    <header>
      <h1>MiTienda</h1>
      <HeaderMenu />
      <form>
        <input type="text" placeholder="Buscar productos" />
        <button type="submit">Buscar..</button>
      </form>
      <HeaderAccountMenu />
    </header>
  );
}
