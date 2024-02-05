/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(
    () =>
      JSON.parse(localStorage.getItem("userData")) || {
        name: "",
        email: "",
        isLogged: false,
        isDarkMode: false,
        shoppingCartItems: [],
      }
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
