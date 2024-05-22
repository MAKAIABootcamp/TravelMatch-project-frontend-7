import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SquareTest from "../../components/ProfileTest/SquareTest";
import { Link } from "react-router-dom";
import ButtonTest from "../../components/ProfileTest/ButtonTest";
import Arvi from "../../assets/Arvi.jpg";
import Guatape from "../../assets/Guatape.jpg";
import Jardin from "../../assets/Jardin.jpg";
import casa from "../../assets/fondoTest.jpeg";
import "../Test/test.scss";
import Slider from "react-slick";

const img = [Arvi, Guatape, Jardin, casa];

const Test = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % img.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

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
      type: "radio",
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
      type: "radio",
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
      type: "checkbox",
    },
    {
      id: 4,
      title: "¿Qué tipo de destino prefieres?",
      respuestas: {
        a: "Playa",
        b: "Montaña",
        c: "Ciudad",
        d: "Campo",
        e: "Pueblito",
      },
      type: "radio",
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
      type: "checkbox",
    },
    {
      id: 6,
      title: "¿Qué tipos de actividades te gustan?",
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
      type: "checkbox",
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
      type: "radio",
    },
    {
      id: 8,
      title: "¿Qué tipos de emociones te gustaría experimentar?",
      respuestas: {
        a: "Asombro",
        b: "Gratitud",
        c: "Calma",
        d: "Felicidad",
        e: "Emoción",
        f: "Pertenencia",
      },
      type: "radio",
    },
  ];

  const botonSiguiente = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <>
      <div className="background_test" style={{ backgroundImage: `url(${img[currentIndex]})` }}>
        <div className="body_test">
          <Slider
            ref={sliderRef}
            {...settings}
            className="profile-test-container"
          >
            {preguntas.map((item, index) => (
              <SquareTest
                key={item.id}
                title={item.title}
                option={item.respuestas}
                currentIndex={index + 1}
                TotalPreguntas={preguntas.length}
                type={item.type}
                onClick={botonSiguiente}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Test;
