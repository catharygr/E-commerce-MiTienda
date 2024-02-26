/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../header//Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import Promotion from "../promotion/Promotion";
// import useProductActions from "../../custom-hooks/useProductActions";
import Loader from "../loader/Loader";
import { useEffect } from "react";
import {
  getProductsLoading,
  getProductsError,
  getProductsThunk,
} from "../../redux/reducers/productsReducer";

import { useDispatch, useSelector } from "react-redux";

export default function Layout() {
  const dispatch = useDispatch();
  const loading = useSelector(getProductsLoading);
  const error = useSelector(getProductsError);
  // const { getProductsMiddleware, loading } = useProductActions();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  return (
    <>
      <Header />
      <Promotion />
      {loading ? <Loader /> : <Outlet />}
      <Footer />
    </>
  );
}
