import { Link } from "react-router-dom";
import Carro from "../../assets/iconoCarro.png";
import "../header/header.scss"

export default function headerDos() {
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
            </div>
        </>
    )
}