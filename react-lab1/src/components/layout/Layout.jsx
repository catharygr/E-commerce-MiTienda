/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../header//Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import Promotion from "../promotion/Promotion";
import Loader from "../loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../error/Error";
import {
  getProductsLoading,
  getProductsError,
  getProductsThunk,
} from "../../redux/reducers/productsReducer";

// Este código se usó para traladar la data de un archivo JSON a Firestore

// import * as oldData from "../../data/db-backup.json";
// import { db } from "../../api/firebase";
// import { doc, setDoc } from "firebase/firestore";

// Iterate over the products array
// oldData.products.forEach(async (product) => {
//   const string = product.id.toString();
//   await setDoc(doc(db, "products", string), product);
// });

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
      {error && <Error error={error} />}
      {loading ? <Loader /> : <Outlet />}
      <Footer />
    </>
  );
}
