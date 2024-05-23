import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className="slider-container">
      <div>
        <div className="slide-content">
          <span className="destination-name">Nombre del Destino 1</span>
          <img
            style={{ backgroundSize: "cover" }}
            src="https://ecoglobalexpeditions.com/wp-content/uploads/2023/04/Portada-Salto-Buey.jpg"
            alt="Slide 1"
          />
        </div>
      </div>
      <div>
        <div className="slide-content">
          <span className="destination-name">Nombre del Destino 2</span>
          <img
            src="https://www.elheraldo.co/sites/default/files/styles/width_1180/public/articulo/2021/11/05/fotojet_1.jpg?itok=dv57WabG"
            alt="Slide 2"
          />
        </div>
      </div>
      <div>
        <div className="slide-content">
          <span className="destination-name">Nombre del Destino 3</span>
          <img
            src="https://ecoglobalexpeditions.com/wp-content/uploads/2023/04/Portada-Salto-Buey.jpg"
            alt="Slide 3"
          />
        </div>
      </div>
    </Slider>
  );
};

export default SliderComponent;
