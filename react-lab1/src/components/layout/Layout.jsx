/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../header//Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import Promotion from "../promotion/Promotion";
import useProductActions from "../../custom-hooks/useProductActions";
import Loader from "../loader/Loader";
import { useEffect } from "react";

export default function Layout() {
  const { getProductsMiddleware, isLoading } = useProductActions();

  useEffect(() => {
    getProductsMiddleware();
  }, []);

  return (
    <>
      <Header />
      <Promotion />
      {isLoading ? <Loader /> : <Outlet />}
      <Footer />
    </>
  );
}
