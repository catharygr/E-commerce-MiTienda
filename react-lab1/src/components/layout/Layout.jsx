import Header from "../header//Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import Promotion from "../promotion/Promotion";

export default function Layout() {
  return (
    <>
      <Header />
      <Promotion />
      <Outlet />
      <Footer />
    </>
  );
}
