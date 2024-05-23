import { useDispatch, useSelector } from "react-redux";
import {
  actionGetDestinoById,
  actionGetDestinos,
} from "../../redux/destinos/destinosActions";
import "../Detalle/detalle.scss";
import dataIcons from "../../services/dataIcons.js";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Vector from "../../assets/more_than.png";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Maps from "../../components/Maps/Maps.jsx";
import { GoogleMapsProvider } from "../../components/Maps/MapsProvider.jsx";

function Detalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { destinos, loadingDestinos, errorDestinos } = useSelector(
    (store) => store.destinos
  );

//   const id = "dyceAAyQSyI60irlc394"; // Reemplaza con el ID de destino real
  useEffect(() => {
    dispatch(actionGetDestinoById(id));
    console.log("dispatch ", dispatch);
  }, [dispatch, id]);

  if (loadingDestinos) return <p>Cargando...</p>;
  if (errorDestinos) return <p>Error: {errorDestinos}</p>;

  const title = destinos && destinos.nombre ? destinos.nombre : "";
  const description =
    destinos && destinos.descripcion ? destinos.descripcion : "";
  const imagenes = destinos && destinos.imagen ? destinos.imagen : [];
  const charact =
    destinos && destinos.caracteristicas ? destinos.caracteristicas : [];

  console.log("imagenes: ", charact);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <>
      <div className="section_detalle">
        <h2 className="title">Bienvenido a {title}</h2>
        {/* --------------------- */}
        {/* <section>
                {
                    destinos.length ? destinos.map(item => <span key={item.id}>{item.nombre}</span>) : null
                }
                    </section> */}
        {/* ---------------------- */}
        <div className="container">
          <div className="container_detalle">
            {/* <div className="container_present">
                            <Slider {...settings}>
                                {imagenes.map((image, index) => (
                                    <div className="container_present_div" key={index}>
                                        <img className="container_present_div_img" src={image} alt={`Imagen ${index + 1}`} />
                                    </div>
                                ))}
                            </Slider>
                            
                            {/* <Carousel autoPlay infiniteLoop>
                                {imagenes.map((image, index) => (
                                    <div className="container_present_div" key={index}>
                                        <img className="container_present_div_img" src={image} alt={`Imagen ${index + 1}`} />
                                    </div>
                                ))}
                            </Carousel> 
                        </div> */}
            <p className="text">{description}</p>
            <span className="text">
              Aquí tienes algunas cosas que podrías disfrutar al visitar {title}
              :
            </span>
            <div className="grid">
              {charact.map((e, index) => (
                <div className="grid_card" key={index}>
                  <span className="grid_card_icon">
                    {dataIcons.map(
                      (i, iIndex) =>
                        e.tipo === i.tipo && (
                          <img
                            key={iIndex}
                            className="grid_card_icon_img"
                            src={i.image}
                            alt=""
                          />
                        )
                    )}
                  </span>
                  <h4 className="grid_card_title">{e.titulo}</h4>
                  <p className="grid_card_text">{e.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="section_button">
          <button
            className="section_button_reseñas"
            onClick={() => {
              console.log("Hice click");
              navigate(`/Reseñas`);
            }}
          >
            <div className="section_button_reseñas_container">
              <span className="section_button_reseñas_container_a">
                Reseñas
              </span>
              <img
                className="section_button_reseñas_container_vector"
                src={Vector}
                alt=""
              />
            </div>
          </button>
        </div>
        <div className="section_map">
          <GoogleMapsProvider>
            <Maps lat={-34.397} lng={150.644} />
          </GoogleMapsProvider>
        </div>
      </div>
    </>
  );
}

export default Detalle;
