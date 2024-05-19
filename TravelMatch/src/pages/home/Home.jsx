import { useEffect, useState } from "react";
import React from 'react';
import "../Home/home.scss";
import Arvi from "../../assets/Arvi.jpg"
import Guatape from "../../assets/Guatape.jpg"
import Jardin from "../../assets/Jardin.jpg"
import Header from "../../components/header/header"
import Footer from "../../components/Footer/Footer"
import { useSelector, useDispatch } from "react-redux";
import { actionLogout } from "../../redux/userAuth/userAuthActions";
import { Link } from "react-router-dom";

const Home = () => {
  const img = [Arvi, Guatape, Jardin];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % img.length); // Cambia 'images' por 'img'
    }, 10000);
    const dispatch = useDispatch();

    return () => clearInterval(interval);
  }, []);


    return (
        <>
        <button onClick={() => dispatch(actionLogout())}><Link to={"/login"}><li>Cerrar  Sesioon</li></Link></button>
            <div className="background" style={{ backgroundImage: `url(${img[currentIndex]})` }}>

            <Header />
                <div className="contenido_body">
                    <h1 className="body_tittle">Antioquia</h1>
                    <p className="body_text">Viajar por Antioquia es una experiencia personalizada donde cada destino vibra con distintas personalidades. Santa Fe de Antioquia atrae a los amantes de la historia, mientras que el Parque Arví es perfecto para los aventureros. Guatapé inspira a los creativos con sus colores vivos, Jericó ofrece un refugio espiritual y tranquilo, y Medellín cautiva con su vibrante mezcla de modernidad y tradición. Descubre en Antioquia el lugar que resuena con tu alma.
                    </p>
                    <button className="body_button">Descubre tu destino</button>
                </div>
            </div>
            <Footer />


        </>


    )
}
export default Home;
