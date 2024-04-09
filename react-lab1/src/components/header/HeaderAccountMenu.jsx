/* eslint-disable react/prop-types */
import "./HeaderAccountMenu.css";
import { ShoppingCart, Heart, User, Moon, Sun } from "react-feather";
import { useContext } from "react";
import { UserContext } from "../../contextos/UserContext";
import { Link } from "react-router-dom";

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
        <Link to="/login">
          {
            <User
              style={{ strokeWidth: 3 }}
              size={20}
              color={
                user.isLogged
                  ? user.isDarkMode
                    ? "greenyellow"
                    : "green"
                  : user.isDarkMode
                    ? "white"
                    : "black"
              }
            />
          }
        </Link>
      </li>
      <li>
        <Heart size={20} />
      </li>
      <li onClick={handleTheme}>
        {!user.isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
      </li>
      <li className="notification-cicle-container">
        <Link to="/cart">
          <ShoppingCart size={20} />
        </Link>

        {user.shoppingCartItems && user.shoppingCartItems.length !== 0 && (
          <span className="notification-cicle">
            {user.shoppingCartItems.length}
          </span>
        )}
      </li>
    </ul>
  );
}
