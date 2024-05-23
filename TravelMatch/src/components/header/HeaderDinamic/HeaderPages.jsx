import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./HeaderPages.scss";
import Logo from "../../../assets/Carro.png";
import { useDispatch, useSelector } from "react-redux";
import { getLinks } from "./Functions/getLinks";
import { actionLogout } from "../../../redux/userAuth/userAuthActions";

function HeaderPages() {
  const { user, isAuth } = useSelector((store) => store.userAuth);

  const [links, setLinks] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation(); // Obtiene la ubicación actual de la página

  useEffect(() => {
    setLinks(() => getLinks(user?.id));
  }, [user]);
  console.log(user);
  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  return (
    <header
      className={`header-container ${
        location.pathname === "/" ? "transparent-header" : "solid-header"
      }`}
    >
      <NavLink
        to={"/"}
        className="no-underline"
        style={{ textDecoration: "none" }}
      >
        <div className="title-header">
          <img className="logo" src={Logo} alt="" />
          <h1>Travel</h1>
          <h2>Match</h2>
        </div>
      </NavLink>

      <nav className="nav-links">
        {links.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="btn-container">
        {isAuth ? (
          <div className="user-info" onClick={toggleDropdown}>
            <span>Hola, {user.name}</span>
            <img className="profile-picture" src={user.photo} alt="Profile" />
            {showDropdown && (
              <div className="dropdown-menu">
                <NavLink to="/profile" className="dropdown-item">
                  Perfil
                </NavLink>
                <button
                  onClick={() => dispatch(actionLogout())}
                  className="dropdown-item"
                >
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <NavLink to="register" className="btn-register">
              Register
            </NavLink>
            <NavLink to="/login" className="btn-login">
              Login
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
}

export default HeaderPages;
