import { Link } from "react-router-dom";
import Carro from "../../assets/iconoCarro.png";
import "../header/header.scss"

export default function header() {
    return (
        <>
            <div className="header">
                <Link to={"/"} className="no-underline">
                    <div className="logo">
                        <h1>Travel</h1>
                        <img src={Carro}></img>
                        <h2>Match</h2>
                    </div>
                </Link>
                <nav className="horizontal-menu">
                    <ul className="menuA">
                        <Link><li>Blog</li></Link>
                        <li>Destinos</li>
                        <li>Contacto</li>
                        <Link to={"/register"}><li>Registro</li></Link>
                        <Link to={"/login"}><li>Entrar</li></Link>
                    </ul>
                </nav>
            </div>
        </>
    )
}