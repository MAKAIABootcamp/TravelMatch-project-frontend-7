import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionLogout } from "../../redux/userAuth/userAuthActions";
import Logo from "../../assets/logoTravel.png"
import "../header/NavigationBar.scss";


const getLinks = (userId = '') => {
  const links = [
    {
      name: 'Destinos',
      link: `/Destinos`
    },
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
        name: 'Test',
        link: `/Test/${userId}`
      },
      {
        name: 'Destinos',
        link: `/Destinos`
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
  const dispatch = useDispatch()
  const { user, isAuth } = useSelector(store => store.userAuth);
  const [links, setLinks] = useState([]);
  const [showUserOptions, setShowUserOptions] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLinks(() => getLinks(user?.id))
  }, [user])

  const handleNavigate = (path) => {
    navigate(path, { state: { user } });
  };

  return (
    <>
      <div className="header">
        <NavLink to={"/"} className="no-underline">
          <img src={Logo}></img>
        </NavLink>
        <nav className="horizontal-menu">
          <ul className="menuA">
            {
              links.map((item, index) => <li key={index}><NavLink className={({ isActive }) => (isActive ? "menuA__item active" : "menuA__item")} to={item.link}>{item.name}</NavLink></li>)
            }
          </ul>
          {
            isAuth ? <div className="logOutBtn">
              <p>{user?.name}</p>
              <button className="logOutBtn__image" onClick={() => setShowUserOptions(!showUserOptions)}>
                <img src={user?.photo} alt={user?.name} />
              </button>
              {
                showUserOptions ?
                  <ul>
                    <li>
                      <button onClick={() => dispatch(actionLogout())}>Cerrar sesión</button>
                      <button onClick={() => handleNavigate('/Perfil')}>Mi perfil</button>
                    </li>
                  </ul> : null
              }
            </div> : null
          }
        </nav>
      </div>
    </>
  );
}