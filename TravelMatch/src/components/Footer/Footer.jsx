import React from "react";
import './Footer.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Twitter from "../../assets/icono_twitter.png";
import Facebook from "../../assets/icono_facebook.png";
import Linkedin from "../../assets/icono_linkedin.png";
import Youtube from "../../assets/icono_youtube.png";

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer_contenido">
                    <p className="footer_tittle">Travel Match</p>
                    <nav className="footer_menu_horizontal">
                        <ul className="footer_menu">
                            <li>Blog</li>
                            <li>Destinos</li>
                            <li>Test</li>
                            <li>Contacto</li>
                        </ul>
                    </nav>
                    <div>
                        <a href=""><img src={Twitter}></img></a>
                        <a href=""><img src={Facebook}></img></a>
                        <a href=""><img src={Linkedin}></img></a>
                        <a href=""><img src={Youtube}></img></a>
                    </div>
                </div>

                <p className="mallama">© 2024, FronEnd 7</p>

            </div>
        </>
    )
}