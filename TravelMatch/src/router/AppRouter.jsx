import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/home/Home";
import Blog from "../pages/Blog/Blog";
import Destinos from "../pages/Destinos/Destinos";
import Test from "../pages/Test/Test";
import Contacto from "../pages/Contacto/Contacto";
import Layout from "../components/Layout/Layout";

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
          <Route path="Test" element={<Test />} />
          <Route path="Contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
