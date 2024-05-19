import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Destinos from "../pages/Destinos/Destinos";
import Test from "../pages/Test/Test";
import Contacto from "../pages/Contacto/Contacto";
import Layout from "../components/Layout/Layout";
import Reseñas from "../pages/Reseñas/Reseñas";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Blog/:id" element={<Blog />} />
          <Route path="Destinos/:id" element={<Destinos />} />
          <Route path="Test/:id" element={<Test />} />
          <Route path="Contacto" element={<Contacto />} />
          <Route path="Reseñas" element={<Reseñas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
