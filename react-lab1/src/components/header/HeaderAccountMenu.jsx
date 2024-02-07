/* eslint-disable react/prop-types */
import "./HeaderAccountMenu.css";
import { ShoppingCart, Heart, User, Moon, Sun } from "react-feather";
import { useContext } from "react";
import { UserContext } from "../../contextos/UserContext";

export default function HeaderAccountMenu({ setRoute }) {
  const { user, setUser } = useContext(UserContext);

  const handleTheme = () => {
    setUser({
      ...user,
      isDarkMode: !user.isDarkMode,
    });
  };
  return (
    <ul className="acount-ul">
      <li>
        <User size={20} />
      </li>
      <li>
        <Heart size={20} />
      </li>
      <li onClick={handleTheme}>
        {!user.isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
      </li>
      <li onClick={() => setRoute("shopping-cart")}>
        <ShoppingCart size={20} />
      </li>
    </ul>
  );
}
