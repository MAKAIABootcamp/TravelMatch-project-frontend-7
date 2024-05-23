// Layout.js
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import HeaderPages from "../header/HeaderDinamic/HeaderPages";

function Layout() {
  const location = useLocation();
  const hideFooterRoutes = ["/Contacto", "/register", "/login"]; // Añade aquí las rutas donde quieres ocultar el footer
  const hideHeaderRoutes = ["/"]; // Añade aquí las rutas donde quieres ocultar el header
  return (
    <>
      <HeaderPages />
      <Outlet />

      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
      {/* {!hideHeaderRoutes.includes(location.pathname) && <header />} 
      <Outlet />

      {/* {!hideFooterRoutes.includes(location.pathname) && <Footer />} */}
      {/* {!hideHeaderRoutes.includes(location.pathname) && <header />}  
      <Outlet />*/}
      {/* {!hideFooterRoutes.includes(location.pathname) && <Footer />} */}
    </>
  );
}

export default Layout;
