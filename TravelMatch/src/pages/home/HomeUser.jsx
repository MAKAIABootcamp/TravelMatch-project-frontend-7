import { useEffect, useState } from "react";
import React from 'react';
import "../Home/homeUser.scss";
import Arvi from "../../assets/Arvi.jpg"
import Guatape from "../../assets/Guatape.jpg"
import Jardin from "../../assets/Jardin.jpg"
import Header from "../../components/header/header"
import Footer from "../../components/Footer/Footer"
import { useSelector, useDispatch } from "react-redux";
import { actionLogout } from "../../redux/userAuth/userAuthActions";

const HomeUser = () => {

    const img = [Arvi, Guatape, Jardin];
    const dispatch = useDispatch();

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(current => (current + 1) % img.length); // Cambia 'images' por 'img'
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="homeUser">
               
                  
                    <button onClick={() => dispatch(actionLogout())}>Cerrar  Sesioon</button>
              
                <Footer />
            </div>


        </>


    )
}
export default HomeUser;