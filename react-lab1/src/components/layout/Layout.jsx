/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../header//Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import Promotion from "../promotion/Promotion";
import Loader from "../loader/Loader";
import { useEffect } from "react";
import {
  getProductsLoading,
  getProductsError,
  getProductsThunk,
} from "../../redux/reducers/productsReducer";
import Error from "../error/Error";

import { useDispatch, useSelector } from "react-redux";

export default function Layout() {
  const dispatch = useDispatch();
  const loading = useSelector(getProductsLoading);
  const error = useSelector(getProductsError);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  return (
    <>
      <Header />
      <Promotion />
      {error && <Error />}
      {loading ? <Loader /> : <Outlet />}
      <Footer />
    </>
  );
}
