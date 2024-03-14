/* eslint-disable react-hooks/exhaustive-deps */
import Header from "../header//Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import Promotion from "../promotion/Promotion";
import Loader from "../loader/Loader";
import { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../error/Error";
import {
  getProductsLoading,
  getProductsError,
  getProductsThunk,
} from "../../redux/reducers/productsReducer";
import { auth } from "../../api/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { UserContext } from "../../contextos/UserContext";

export default function Layout() {
  const dispatch = useDispatch();
  const loading = useSelector(getProductsLoading);
  const error = useSelector(getProductsError);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    dispatch(getProductsThunk());
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        setUser({ ...user, isLogged: true });
      } else {
        setUser({ ...user, isLogged: false });
      }
    });
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
