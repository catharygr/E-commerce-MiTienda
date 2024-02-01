import "./HeaderAccountMenu.css";
import { ShoppingCart, Heart, User } from "react-feather";

export default function HeaderAccountMenu() {
  return (
    <ul className="acount-ul">
      <li>
        <a href="/">
          <ShoppingCart size={20} />
        </a>
      </li>
      <li>
        <a href="/">
          <Heart size={20} />
        </a>
      </li>
      <li>
        <a href="/">
          <User size={20} />
        </a>
      </li>
    </ul>
  );
}
