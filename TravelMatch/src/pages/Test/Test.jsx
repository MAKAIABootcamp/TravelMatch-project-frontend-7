import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ButtonTest from "../../components/ProfileTest/ButtonTest";
import fondo from "../../assets/fondoTest.jpeg";
import SquareTest from "../../components/ProfileTest/SquareTest";
import Slider from "react-slick";
import "./test.scss";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const preguntas = [
  {
    id: 1,
    title: "¿Qué clima prefieres?",
    respuestas: {
      a: "Clima tropical húmedo",
      b: "Clima de montaña",
      c: "Clima de páramo",
      d: "Clima tropical de sabana",
    },
  },
  {
    id: 2,
    title: "¿Cuál es tu principal motivo para viajar?",
    respuestas: {
      a: "Vacaciones",
      b: "Aventura",
      c: "Cultura",
      d: "Deporte",
    },
  },
  {
    id: 3,
    title: "Prefieres viajar",
    respuestas: {
      a: "Solo",
      b: "En pareja",
      c: "Con familia",
      d: "Con amigos",
    },
  },
  {
    id: 4,
    title: "¿Qué tipo de destino prefieres?",
    respuestas: {
      a: "Playa",
      b: "Montaña",
      c: "Ciudad",
      d: "Campo",
    },
  },
  {
    id: 5,
    title: "¿Qué aspectos consideras más importantes del viaje?",
    respuestas: {
      a: "Actividades",
      b: "Arquitectura",
      c: "Presupuesto",
      d: "Gastronomía",
      e: "Historia",
      f: "Cultura",
    },
  },
  {
    id: 6,
    title: "Qué tipos de actividades te gustan?",
    respuestas: {
      a: "Senderismo",
      b: "Cabalgatas",
      c: "Pesca deportiva",
      d: "Retiros espirituales",
      e: "Canopy",
      f: "Canotaje",
      g: "Camping",
      h: "Parapente",
      i: "Ruta en cuatrimoto",
      j: "Escalar al aire libre",
    },
  },
  {
    id: 7,
    title: "¿Con qué nivel de aventurero se identifica?",
    respuestas: {
      a: "Bajo",
      b: "Medio",
      c: "Alto",
      d: "Extremo",
    },
  },
  {
    id: 8,
    title: "¿Qué tipos de emociones te gustaria experimentar?",
    respuestas: {
      a: "Asombro",
      b: "Gratitud",
      c: "Calma",
      d: "Felicidad",
      e: "Emoción",
      f: "Pertenencia",
    },
  },
];

function Test() {
  let sliderRef = useRef(null);

  const botonSiguiente = () => {
    sliderRef.slickNext();
  };

  return (
    <div className="center-slider">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
        className="profile-test-container"
      >
        {preguntas.map((item) => (
          <SquareTest
            key={item.id}
            title={item.title}
            option={item.respuestas}
            onClick={botonSiguiente}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Test;
