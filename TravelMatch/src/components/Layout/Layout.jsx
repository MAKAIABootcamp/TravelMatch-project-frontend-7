import React from "react";
import Footer from "../Footer/Footer";
import Header from "../header/header"
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
     
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
