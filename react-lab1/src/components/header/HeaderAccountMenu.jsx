import "./HeaderAccountMenu.css";
import { ShoppingCart, Heart, User, Moon, Sun } from "react-feather";
import { useContext } from "react";
import { UserContext } from "../../contextos/userContext";

export default function HeaderAccountMenu() {
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
        <a href="/">
          <User size={20} />
        </a>
      </li>
      <li>
        <a href="/">
          <Heart size={20} />
        </a>
      </li>
      <li onClick={handleTheme}>
        {!user.isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
      </li>
      <li>
        <a href="/">
          <ShoppingCart size={20} />
        </a>
      </li>
    </ul>
  );
}
