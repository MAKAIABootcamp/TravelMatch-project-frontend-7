// Contacto.js

import React from "react";
import "./Contacto.scss";

function Contacto() {
  return (
    <section className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h1>Contactanos</h1>
          <p>
            Si tienes alguna pregunta, comentario o sugerencia, no dudes en
            contactarnos. Nos encantaría saber de ti.
          </p>
          <ul>
            <li>
              <i className="fas fa-envelope"></i> Email: contacto@tusitio.com
            </li>
            <li>
              <i className="fas fa-phone"></i> Teléfono: +123 456 7890
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i> Dirección: Calle Falsa
              123, Ciudad, País
            </li>
          </ul>
        </div>
        <div className="contact-form">
          <form>
            <div>
              <label htmlFor="name">Nombre completo</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="e.g user name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="phone">Celular</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div>
              <label htmlFor="message">Tu mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
