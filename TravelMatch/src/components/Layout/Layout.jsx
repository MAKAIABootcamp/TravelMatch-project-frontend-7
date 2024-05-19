// Layout.js

import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../header/HeaderPages/Header";
import Footer from "../Footer/Footer";

function Layout() {
  const location = useLocation();
  const hideFooterRoutes = ["/Contacto"]; // Añade aquí las rutas donde quieres ocultar el footer
  const hideHeaderRoutes = ["/"]; // Añade aquí las rutas donde quieres ocultar el header
  return (
    <>
  
      {!hideHeaderRoutes.includes(location.pathname) && <Header />} 
      <Outlet />
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default Layout;
