import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Error from "../components/error/Error";
import MainContent from "../components/content/MainContent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainContent />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
