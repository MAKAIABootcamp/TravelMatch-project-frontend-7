import React, { useEffect } from "react";
import "./Reseñas.scss";
import { collection, doc, getDoc } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseconfig";

const Reseñas = () => {
  console.log(dataBase);
  const [Destino, setDestino] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const obtenerReseñas = async () => {
    try {
      const docRef = doc(dataBase, "reseña", "9gGPEf04a4raQe5cPV1p");
      const docSnap = await getDoc(docRef);
      setDestino(docSnap.data());
      setIsLoading(false);
    } catch (error) {
      console.error("Error obteniendo las reseñas:", error);
    }
  };

  useEffect(() => {
    obtenerReseñas();
  }, []);

  return (
    <div className="reseñas-container">
      <div className="portada">
        <img
          src={Destino.imagen}
          alt={Destino.nombre}
          className="imagen-destino"
        />
        <h1 className="titulo-destino">{Destino.nombre}</h1>
      </div>
      <div className="lista-reseñas">
        {isLoading ? (
          <h3>Cargando reseñas...</h3>
        ) : Destino > 0 ? (
          <h4>No hay Destino</h4>
        ) : (
          Destino.reseñas.map((reseña, index) => (
            <div key={index} className="reseña-card">
              <div className="reseña-card-header">
                <span className="reseña-fecha">{reseña.fecha}</span>
                <button className="reseña-fav">&#9825;</button>
              </div>
              <img
                src={reseña.imagen}
                alt="Imagen de la reseña"
                className="reseña-imagen"
              />
              <div className="reseña-card-content">
                <div className="reseña-rating">
                  <span className="reseña-puntaje">★ {reseña.puntaje}</span>
                  <span className="reseña-ubicacion">{reseña.ubicacion}</span>
                </div>
                <p className="reseña-titulo">{reseña.comentario}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Reseñas;
