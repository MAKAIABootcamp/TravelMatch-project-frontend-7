// Layout.js

import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavigationBar from "../header/header";
import Footer from "../Footer/Footer";


function Layout() {
  const location = useLocation();
  const hideFooterRoutes = ["/Contacto", "/register"]; // Añade aquí las rutas donde quieres ocultar el footer
  const hideHeaderRoutes = ["/"]; // Añade aquí las rutas donde quieres ocultar el header
  return (
    <>
      <NavigationBar/>
      <Outlet/>
      <Footer/>
      {/* {!hideHeaderRoutes.includes(location.pathname) && <header />} 
      <Outlet />
      {!hideFooterRoutes.includes(location.pathname) && <Footer />} */}
    </>
  );
}

export default Layout;
