/* import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ButtonTest from "../../components/ProfileTest/ButtonTest";
import fondo from "../../assets/fondoTest.jpeg";
import SquareTest from "../../components/ProfileTest/SquareTest";
import "./test.scss";
import Slider from "react-slick";

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

function Test() {
  let sliderRef = useRef(null);

  const botonSiguiente = () => {
    sliderRef.slickNext();
  };
  console.log(" preguntas", preguntas);
  return (
    // <div className="center-slider">
    <Slider
      ref={(slider) => {
        sliderRef = slider;
      }}
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
    // </div>
  );
}

export default Test;
 */

import React, { useEffect, useState } from "react";
import Result from "../../components/Result/Result";
import Question from "../../components/Questions/Questions";
import { preguntas } from "../../components/Questions/Data/questions";
import "./test.scss";
import SliderComponent from "../../components/Slider/Slider";
import { useSelector } from "react-redux";
import { dataBase } from "../../firebase/firebaseconfig";
import { collection, getDocs } from "firebase/firestore";
const Test = () => {
  const { user, isAuth } = useSelector((store) => store.userAuth);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);
  const [destinos, setDestinos] = useState([]);
  const obtenerDestinos = async () => {
    const querySnapshot = await getDocs(collection(dataBase, "destinos"));
    const destinos = [];
    querySnapshot.forEach((doc) => {
      destinos.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    setDestinos(destinos);
  };
  useEffect(() => {
    obtenerDestinos();
  }, []);
  console.log(destinos);
  const handleChange = (id, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: value,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < preguntas.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const scores = destinos.map((destino) => {
      const categorias = destino.categorias;
      let score = 0;

      if (categorias.clima === answers[1]) score++;
      if (categorias.motivo.includes(answers[2])) score++;
      if (categorias.tipoDestino === answers[4]) score++;
      if (categorias.acompañamiento.includes(answers[3])) score++;
      if (categorias.interesViaje.some((i) => answers[5].includes(i))) score++;
      if (categorias.actividades.some((act) => answers[6].includes(act)))
        score++;
      if (categorias.emociones.includes(answers[8])) score++;

      return { destino, score };
    });

    const maxScore = Math.max(...scores.map((s) => s.score));
    const matchingDestinations = scores.filter(
      (s) => s.score === maxScore && s.score > 0
    );

    setResults(matchingDestinations.length > 0 ? matchingDestinations : null);
  };

  if (results) {
    return results.length > 0 ? (
      <div className="test-background results-container">
        <div className="portada">
          <h1 className="results-title">Destinos recomendados</h1>
          <p>Hola!!, {user.name} el Destino con el que hiciste Match es: </p>
        </div>
        <div className="results">
          {results.map((result) => (
            <Result key={result.destino.idDestino} destino={result.destino} />
          ))}
        </div>
      </div>
    ) : (
      <div className="no-results">
        <h1>No se encontraron destinos</h1>
      </div>
    );
  }

  return (
    <div className="test-background">
      <div className="App">
        {/*       <SliderComponent />
         */}{" "}
        <h1 className="test-title">Encuentra tu destino ideal</h1>
        <form className="form-test" onSubmit={handleSubmit}>
          <Question
            question={preguntas[currentQuestionIndex]}
            handleChange={handleChange}
            currentAnswer={answers[preguntas[currentQuestionIndex].id]}
          />
          <div className="navigation-buttons">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              Anterior
            </button>
            {currentQuestionIndex < preguntas.length - 1 ? (
              <button type="button" onClick={handleNext}>
                Siguiente
              </button>
            ) : (
              <button type="submit">Enviar</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Test;
