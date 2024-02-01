import { ShoppingCart, Heart, User } from "react-feather";

export default function HeaderAccountMenu() {
  return (
    <ul>
      <li>
        <a href="/">
          <ShoppingCart />
        </a>
      </li>
      <li>
        <a href="/">
          <Heart />
        </a>
      </li>
      <li>
        <a href="/">
          <User />
        </a>
      </li>
    </ul>
  );
}
