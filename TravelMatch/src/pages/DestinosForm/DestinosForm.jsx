import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetPreguntas } from "../../redux/preguntas/preguntasActions";
import icons from "../../services/dataIcons";
import "./destinosForm.scss";

const DestinosForm = () => {
  const dispatch = useDispatch();
  const preguntas = useSelector((store) => store.preguntas.preguntas);
  const [categorias, setCategorias] = useState({});
  const [dataDestino, setDataDestino] = useState({
    nombre:"",
    nombreMunicipio:"",
    descripcion: "",
    clima: "",
    motivo: [],
    acompañamiento: [],
    tipoDestino: "",
    interesViaje: [],
    nivel: "",
    actividades: [],
    emociones: [],
    imagen: [],
  });

  useEffect(() => {
    dispatch(actionGetPreguntas());
  }, [dispatch]);

  useEffect(() => {
    setCategorias(() => {
      const newState = {};
      preguntas.forEach((item) => {
        newState[item.categoria] = Object.values(item.respuestas);
      });
      return newState;
    });
  }, [preguntas]);

  const handleChange = (e) => {
    const { id, value, type, name, custom, files } = e.target;
    setDataDestino(() => {
      const newState = { ...dataDestino };
      if (custom&& Array.isArray(newState[custom])) {
        const existe = newState[custom].includes(id);
        if (existe) {
          newState[custom] = newState[custom].filter((item) => item !== id);
        } else {
          newState[id].push(id);
        }
      }
      if (type == "file") {
        newState[name].push(e.target.files[0]);
      }
      return newState;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataDestino);
  };

  return (
    <div className="destinosForm">
      <h1 className="destinosForm__title">
        Agregar Destinos
        <form className="destinosForm__form" onSubmit={handleSubmit}>
          <label className="destinosForm__label" htmlFor="nombre">
            <span>Nombre del destino</span>
            <input
              type="text"
              placeholder="La Piedra del Peñol"
              id="nombre"
              // value={dataDestino.nombre}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="nombreMunicipio" className="destinosForm__label">
            <span>Nombre del municipio</span>
            <input
              type="text"
              placeholder="Guatapé"
              id="nombreMunicipio"
              // value={dataDestino.nombreMunicipio}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="descripcion" className="destinosForm__label">
            <span>Descripción del destino</span>
            <textarea
              id="descripcion"
              // value={dataDestino.descripcion}
              onChange={handleChange}
            ></textarea>
          </label>
          <div>
            <h3>Categorías</h3>
            <label htmlFor="" className="destinosForm__label">
              <span>Clima</span>
              <select name="categorias" id="clima" onChange={handleChange}>
                <option value="">Escoja el clima</option>
                {categorias?.clima
                  ? categorias.clima.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))
                  : null}
              </select>
            </label>
            <div>
              <h4>Acompañamiento</h4>
              <section>
                {categorias?.acompañamiento
                  ? categorias.acompañamiento.map((item, index) => (
                      <label
                        key={index}
                        htmlFor={item}
                        className="destinosForm__label"
                      >
                        <span>{item}</span>
                        <input
                          type="checkbox"
                          name="categorias"
                          custom="acompañamiento"
                          id={item}
                          checked={
                            dataDestino.acompañamiento.length &&
                            dataDestino.acompañamiento.includes(item)
                          }
                          onChange={handleChange}
                        />
                      </label>
                    ))
                  : null}
              </section>
            </div>
            <div>
              <h4>Motivo</h4>
              <section>
                {categorias?.motivo
                  ? categorias.motivo.map((item, index) => (
                      <label
                        key={index}
                        htmlFor={item}
                        className="destinosForm__label"
                      >
                        <span>{item}</span>
                        <input
                          type="checkbox"
                          name="categorias"
                          custom="motivo"
                          id={item}
                          checked={
                            dataDestino.motivo.length &&
                            dataDestino.motivo.includes(item)
                          }
                          onChange={handleChange}
                        />
                      </label>
                    ))
                  : null}
              </section>
            </div>
            <label htmlFor="" className="destinosForm__label">
              <span>Tipo de destino</span>
              <select
                name="categorias"
                id="tipoDestino"
                onChange={handleChange}
              >
                <option value="">Escoja el tipo</option>
                {categorias?.tipoDestino
                  ? categorias.tipoDestino.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))
                  : null}
              </select>
            </label>
            <div>
              <h4>Interés del viaje</h4>
              <section>
                {categorias?.interesViaje
                  ? categorias.interesViaje.map((item, index) => (
                      <label
                        key={index}
                        htmlFor={item}
                        className="destinosForm__label"
                      >
                        <span>{item}</span>
                        <input
                          type="checkbox"
                          name="categorias"
                          custom="interesViaje"
                          id={item}
                          checked={
                            dataDestino.interesViaje.length &&
                            dataDestino.interesViaje.includes(item)
                          }
                          onChange={handleChange}
                        />
                      </label>
                    ))
                  : null}
              </section>
            </div>

            <label htmlFor="nivel" className="destinosForm__label">
              <span>Nivel de aventura</span>
              <select name="categorias" id="nivel" onChange={handleChange}>
                <option value="">Escoja un nivel</option>
                {categorias?.nivel
                  ? categorias.nivel.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))
                  : null}
              </select>
            </label>

            <div>
              <h4>Actividades</h4>
              <section>
                {categorias?.actividades
                  ? categorias.actividades.map((item, index) => (
                      <label
                        key={index}
                        htmlFor={item}
                        className="destinosForm__label"
                      >
                        <span>{item}</span>
                        <input
                          type="checkbox"
                          name="categorias"
                          custom="actividades"
                          id={item}
                          checked={
                            dataDestino.actividades.length &&
                            dataDestino.actividades.includes(item)
                          }
                          onChange={handleChange}
                        />
                      </label>
                    ))
                  : null}
              </section>
            </div>

            <div>
              <h4>Emociones</h4>
              <section>
                {categorias?.emociones
                  ? categorias.emociones.map((item, index) => (
                      <label
                        key={index}
                        htmlFor={item}
                        className="destinosForm__label"
                      >
                        <span>{item}</span>
                        <input
                          type="checkbox"
                          name="categorias"
                          custom="emociones"
                          id={item}
                          checked={
                            dataDestino.emociones.length &&
                            dataDestino.emociones.includes(item)
                          }
                          onChange={handleChange}
                        />
                      </label>
                    ))
                  : null}
              </section>
            </div>
          </div>
          <div>
            <h3>Características</h3>
            <label htmlFor="titulo" className="destinosForm__label">
              <span>Título</span>
              <input
                type="text"
                placeholder="Arquitectura"
                name="caracteristicas"
                id="titulo"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="tipo" className="destinosForm__label">
              <span>Tipo</span>
              <select id="tipo" name="caracteristicas" onChange={handleChange}>
                <option value="">Escoja un tipo</option>
                {icons.map((item, index) => (
                  <option key={index} value={item.tipo}>
                    {item.tipo}
                  </option>
                ))}
              </select>
            </label>
            <label
              htmlFor="descripcionCaracteristica"
              className="destinosForm__label"
            >
              <span>Descripción de la característica</span>
              <textarea
                name="caracteristicas"
                id="descripcion"
                onChange={handleChange}
              ></textarea>
            </label>
            <button type="button">Agregar más características</button>
          </div>
          <div>
            <h3>Imágenes</h3>
            <label htmlFor="imagen" className="destinosForm__label">
              <span>Subir una imagen</span>
              <input type="file" name="imagen" onChange={handleChange} />
            </label>
            <button type="button">+</button>
          </div>
          <button type="submit">Guardar destinos</button>
        </form>
      </h1>
    </div>
  );
};

export default DestinosForm;
