// Header.js

import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header-container">
      <div className="title-header">
        <h1>Travel</h1>
        <h2>Match</h2>
      </div>
      <nav className="nav-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Inicio
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Blog
        </NavLink>
        <NavLink
          to="/destinos"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Destinos
        </NavLink>
        <NavLink
          to="/test"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Test
        </NavLink>
        <NavLink
          to="/contacto"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contacto
        </NavLink>
        <NavLink
          to="/Reseñas"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Reseñas
        </NavLink>
      </nav>
      <div className="btn-container">
        <NavLink to="/register" className="btn-register">
          Register
        </NavLink>
        <NavLink to="/login" className="btn-login">
          Login
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
