import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Error from "../components/error/Error";
import MainContent from "../components/content/MainContent";
import ShoppingCart from "../components/shopping-card/ShoppingCart";
import LoginForm from "../components/login/LoginForm";
import ProtectedRouter from "../components/protected-router/ProtectedRouter";
import ProductDetails from "../components/product-details/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainContent />,
      },
      {
        path: "product/:id",
        element: (
          <ProtectedRouter>
            <ProductDetails />
          </ProtectedRouter>
        ),
      },
      {
        path: "cart",
        element: (
          <ProtectedRouter>
            <ShoppingCart />
          </ProtectedRouter>
        ),
      },
      {
        path: "login",
        element: <LoginForm />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
