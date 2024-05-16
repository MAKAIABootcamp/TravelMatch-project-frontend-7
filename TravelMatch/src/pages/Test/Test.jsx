import React from "react";
import { Link } from "react-router-dom";
import ButtonTest from "../../components/ProfileTest/ButtonTest";
import fondo from "../../assets/fondoTest.jpeg";
import SquareTest from "../../components/ProfileTest/SquareTest";
import "./test.scss";


function Test() {
 
  const preguntas =[
    {
      id: 1,
      title: '¿Qué clima prefieres?',
      respuestas: {
        a: 'Clima tropical húmedo',
        b: 'Clima de montaña',
        c: 'Clima de páramo',
        d: 'Clima tropical de sabana'
      }
    },
    {
      id: 2,
      title: '¿Cuál es tu principal motivo para viajar?',
      respuestas:{
        a: 'Vacaciones',
        b: 'Aventura',
        c: 'Cultura',
        d: 'Deporte'
      }
    },
    {
      id: 3,
      title: 'Prefieres viajar',
      respuestas:{
        a: 'Solo',
        b: 'En pareja',
        c: 'Con familia',
        d: 'Con amigos'
      }
    }
  ]
    
  return (
    <div
      className="profile-test-container"
    >
      
        {preguntas.map((item) => (
          <SquareTest
            key={item.id}
            title={item.title}
            option={item.respuestas}                   
          />
        ))}

        
    </div>
  );
}

export default Test;

