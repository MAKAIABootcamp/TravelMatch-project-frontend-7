import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Carro from "../../assets/iconoCarro.png";
import "../header/header.scss";


const getLinks = (userId = '') => {
  const links = [
    {
      name: 'Contacto',
      link: '/Contacto'
    },
    {
      name: 'Registro',
      link: `/register`
    },
    {
      name: 'Entrar',
      link: `/login`
    }
  ]
  if (userId) {
    return ([
      {
        name: 'Blog',
        link: `/Blog/${userId}`
      },
      {
        name: 'Destinos',
        link: `/Destinos/${userId}`
      },
      {
        name: 'Contacto',
        link: '/Contacto'
      }
    ])
  }
  return links
}

export default function NavigationBar() {
  const { user } = useSelector(store => store.userAuth);
  const [links, setLinks] = useState([])

  useEffect(() => {
    setLinks(() => getLinks(user?.id))
  }, [user])
  return (
    <>
      <div className="header">
        <NavLink to={"/"} className="no-underline">
          <div className="logo">
            <h1>Travel</h1>
            <img src={Carro}></img>
            <h2>Match</h2>
          </div>
        </NavLink>
        <nav className="horizontal-menu">
          <ul className="menuA">
            {
              links.map((item, index) => <li key={index}><NavLink to={item.link}>{item.name}</NavLink></li>)
            }
          </ul>
        </nav>
      </div>
    </>
  );
}
