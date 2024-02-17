/* eslint-disable react/prop-types */
import { UserContext } from "../../contextos/UserContext";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRouter({ children }) {
  const { user } = useContext(UserContext);
  const location = useLocation();

  return user.isLogged ? (
    children
  ) : (
    <Navigate
      to="/login"
      state={location}
    />
  );
}
