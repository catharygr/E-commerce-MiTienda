import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import UserProvider from "./contextos/UserContext.jsx";
import RouterProvider from "./contextos/RouterContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider>
        <App />
      </RouterProvider>
    </UserProvider>
  </React.StrictMode>
);
