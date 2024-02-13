import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import UserProvider from "./contextos/UserContext.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
