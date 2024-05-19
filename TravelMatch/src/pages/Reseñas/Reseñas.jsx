import React from 'react';
import './Reseñas.scss';

const Reseñas = () => {
    const destino = {
        nombre: 'Salto del Buey',
        imagen: 'https://static.roadtrip.travel/media/roadtrips/caminata-y-experiencia-en-el-salto-del-buey-1200-214ca22.jpg',
        reseñas: [
          {
            comentario: 'Un lugar muy bonito y entretenido',
            fecha: 'May. 23, 2024',
            idDestino: '7654',
            idUsuario: '65432',
            imagen: 'https://static.roadtrip.travel/media/roadtrips/caminata-y-experiencia-en-el-salto-del-buey-1200-214ca22.jpg',
            puntaje: '5.00',
            ubicacion: 'La Ceja - Antioquia',
          },
          {
            comentario: 'Hermosos paisajes y una experiencia inolvidable',
            fecha: 'Jun. 5, 2024',
            idDestino: '7654',
            idUsuario: '65433',
            imagen: 'https://static.roadtrip.travel/media/roadtrips/caminata-y-experiencia-en-el-salto-del-buey-1200-214ca22.jpg',
            puntaje: '4.50',
            ubicacion: 'La Ceja - Antioquia',
          },
          {
            comentario: 'Una caminata desafiante pero gratificante',
            fecha: 'Jul. 12, 2024',
            idDestino: '7654',
            idUsuario: '65434',
            imagen: 'https://static.roadtrip.travel/media/roadtrips/caminata-y-experiencia-en-el-salto-del-buey-1200-214ca22.jpg',
            puntaje: '4.80',
            ubicacion: 'La Ceja - Antioquia',
          },
          {
            comentario: 'El guía fue muy amable y conocedor de la zona',
            fecha: 'Aug. 20, 2024',
            idDestino: '7654',
            idUsuario: '65435',
            imagen: 'https://static.roadtrip.travel/media/roadtrips/caminata-y-experiencia-en-el-salto-del-buey-1200-214ca22.jpg',
            puntaje: '4.90',
            ubicacion: 'La Ceja - Antioquia',
          },
          {
            comentario: 'Recomendado para los amantes de la naturaleza',
            fecha: 'Sep. 14, 2024',
            idDestino: '7654',
            idUsuario: '65436',
            imagen: 'https://static.roadtrip.travel/media/roadtrips/caminata-y-experiencia-en-el-salto-del-buey-1200-214ca22.jpg',
            puntaje: '5.00',
            ubicacion: 'La Ceja - Antioquia',
          },
          {
            comentario: 'La mejor caminata del mundo',
            fecha: 'Oct. 23, 2024',
            idDestino: '7654',
            idUsuario: '65437',
            imagen: 'https://static.roadtrip.travel/media/roadtrips/caminata-y-experiencia-en-el-salto-del-buey-1200-214ca22.jpg',
            puntaje: '5.00',
            ubicacion: 'La Ceja - Antioquia',
          },
        ],
      };
      
  return (
    <div className="reseñas-container">
      <div className="portada">
        <img src={"https://blog.redbus.co/wp-content/uploads/2019/10/Salto-del-Buey-12-1-compressor.jpg"} alt={destino.nombre} className="imagen-destino" />
        <h1 className="titulo-destino">{destino.nombre}</h1>
      </div>
      <div className="lista-reseñas">
        {destino.reseñas.map((reseña, index) => (
          <div key={index} className="reseña-card">
            <div className="reseña-card-header">
              <span className="reseña-fecha">{reseña.fecha}</span>
              <button className="reseña-fav">&#9825;</button>
            </div>
            <img src={reseña.imagen} alt="Imagen de la reseña" className="reseña-imagen" />
            <div className="reseña-card-content">
              <div className="reseña-rating">
                <span className="reseña-puntaje">★ {reseña.puntaje}</span>
                <span className="reseña-ubicacion">{reseña.ubicacion}</span>
              </div>
              <p className="reseña-titulo">{reseña.comentario}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reseñas;
