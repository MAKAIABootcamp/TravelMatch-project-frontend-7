import React from "react";
import { Link } from "react-router-dom";
import "./test.scss";
import ButtonTest from "../../components/ProfileTest/ButtonTest";
import fondo from "../../assets/fondoTest.jpeg";
import SquareTest from "../../components/ProfileTest/SquareTest";

function Test() {
 
  const cardItems = [
    { id: 1, pregunta1: "kkkk", precio: 10 },
    { id: 2, nombre: "Producto 2", precio: 10 },
    { id: 3, nombre: "Producto 3", precio: 10 },
    { id: 4, nombre: "Producto 4", precio: 10, 
    description: [
      { id: 1, nombre: "mmmmmm", precio: 10 },
      { id: 2, nombre: "Producto 2", precio: 20 },
      { id: 3, nombre: "Producto 3", precio: 30 },
      { id: 4, nombre: "Producto 4", precio: 50 },
    ] },
    
  ];
    
  return (
    <div
      className="profile-test-container"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "77vh",
      }}
    >
      <div className="background-sombra">
        {cardItems.map((item) => (
          <SquareTest
            key={item.id}
            title={item.nombre}
            option={`$${item.precio}`}
                   
          />
        ))}
        <ButtonTest test="Siguiente" />
      </div>
    </div>
  );
}

export default Test;

