import React from "react";
import "./Result.scss";

const Result = ({ destino }) => {
  return (
    <div className="result">
      <h3>Bienvenido a </h3>
      <h3>{destino.nombre}</h3>
      <p>{destino.descripcion}</p>
      <p>Municipio: {destino.nombreMunicipio}</p>
      <img src={destino.imagen[0]} alt={destino.nombre} />
      <button
        className="ver-mas-button"
        onClick={() => (window.location.href = `/detalle/${destino.id}`)}
      >
        Ver más
      </button>
    </div>
  );
};

export default Result;
