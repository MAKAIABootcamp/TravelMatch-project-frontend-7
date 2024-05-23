import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Arvi from "../../assets/Arvi.jpg";
import Guatape from "../../assets/Guatape.jpg";
import Jardin from "../../assets/Jardin.jpg";
import "./home.scss";

const img = [Arvi, Guatape, Jardin];

const Home = () => {
  const navigate = useNavigate();
  const { isAuth, user } = useSelector((store) => store.userAuth);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % img.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="background"
        style={{ backgroundImage: `url(${img[currentIndex]})` }}
      >
        <div className="contenido_body">
          <h1 className="body_tittle">Antioquia</h1>
          <p className="body_text">
            Viajar por Antioquia es una experiencia personalizada donde cada
            destino vibra con distintas personalidades. Santa Fe de Antioquia
            atrae a los amantes de la historia, mientras que el Parque Arví es
            perfecto para los aventureros. Guatapé inspira a los creativos con
            sus colores vivos, Jericó ofrece un refugio espiritual y tranquilo,
            y Medellín cautiva con su vibrante mezcla de modernidad y tradición.
            Descubre en Antioquia el lugar que resuena con tu alma.
          </p>

          <button
            onClick={() => navigate(`/Test/${user?.id}`)}
            className="body_button"
          >
            Descubre tu destino
          </button>
        </div>
      </div>
    </>
  );
};
export default Home;
