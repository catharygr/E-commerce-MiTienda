/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const RouterContext = createContext();

export default function RouterProvider({ children }) {
  // content, shopping-cart
  const [route, setRoute] = useState("content");
  return (
    <RouterContext.Provider value={{ route, setRoute }}>
      {children}
    </RouterContext.Provider>
  );
}
