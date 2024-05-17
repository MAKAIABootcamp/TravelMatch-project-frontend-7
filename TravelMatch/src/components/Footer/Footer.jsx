import React from "react";
import './Footer.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';




function Footer() {
  return (
    <footer className="footer">
        <div className="footer-title">
          <h1>Travel Match</h1>
        </div>
          <nav className="footer-nav">
            <a href="#blog">Blog</a>
            <a href="#destinos">Destinos</a>
            <a href="#test">Test</a>
            <a href="#contacto">Contacto</a>
          </nav>
            <div className="social-icons">
                <a href="#twitter"><i className="fab fa-twitter"></i></a>
                <a href="#facebook"><i className="fab fa-facebook"></i></a>
                <a href="#linkedin"><i className="fab fa-linkedin"></i></a>
                <a href="#youtube"><i className="fab fa-youtube"></i></a>
      
            </div>
    </footer>
  );
};
   



export default Footer;
