// Layout.js

import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavigationBar from "../header/NavigationBar";
import Footer from "../Footer/Footer";


function Layout() {
  const location = useLocation();
  const hideFooterRoutes = ["/Contacto"]; // Añade aquí las rutas donde quieres ocultar el footer
  const hideHeaderRoutes = ["/"]; // Añade aquí las rutas donde quieres ocultar el header
  return (
    <>
      <NavigationBar/>
      <Outlet/>
      
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
      {/* {!hideHeaderRoutes.includes(location.pathname) && <header />} 
      <Outlet />
      {!hideFooterRoutes.includes(location.pathname) && <Footer />} */}
       
    </>
  );
}

export default Layout;
