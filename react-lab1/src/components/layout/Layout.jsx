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

// import * as oldData from "../../data/db copy.json";
// import { db } from "../../api/firebase";
// import { doc, setDoc } from "firebase/firestore";

// oldData.products.forEach(async (product) => {
//   const caty = product.id.toString();
//   await setDoc(doc(db, "products", caty), product);
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
