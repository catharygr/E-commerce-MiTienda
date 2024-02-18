/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(
    () =>
      JSON.parse(localStorage.getItem("userData")) || {
        name: "",
        email: "",
        isLogged: false,
        isDarkMode: true,
        shoppingCartItems: [],
        role: "",
      }
  );

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
