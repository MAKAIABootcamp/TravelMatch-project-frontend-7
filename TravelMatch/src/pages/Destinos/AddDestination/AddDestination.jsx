// AddDestination.js
import React, { useState } from "react";
import "./AddDestination.scss";
import { dataBase } from "../../../firebase/firebaseconfig";
import Swal from "sweetalert2";
import { addDoc, collection } from "firebase/firestore";

const AddDestination = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    nombreMunicipio: "",
    descripcion: "",
    imagen: [],
    caracteristicas: {
      descripcion: "",
      tipo: "",
      titulo: "",
    },
    categorias: {
      motivo: [],
      clima: "",
      interesViaje: [],
      emociones: [],
      actividades: [],
      tipoDestino: "",
      acompanamiento: [],
    },
    ubicacion: {
      latitud: "",
      longitud: "",
    },
  });
  const handleImageChange = (e, index) => {
    const { value } = e.target;
    setFormData((prevData) => {
      const newImages = [...prevData.imagen];
      newImages[index] = value;
      return {
        ...prevData,
        imagen: newImages,
      };
    });
  };
  const addImageField = () => {
    setFormData((prevData) => ({
      ...prevData,
      imagen: [...prevData.imagen, ""],
    }));
  };
  const removeImageField = (index) => {
    setFormData((prevData) => {
      const newImages = prevData.imagen.filter((_, i) => i !== index);
      return {
        ...prevData,
        imagen: newImages,
      };
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const [field, subfield] = name.split(".");

    if (subfield) {
      setFormData((prevData) => ({
        ...prevData,
        [field]: {
          ...prevData[field],
          [subfield]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      categorias: {
        ...prevData.categorias,
        [name]: Array.isArray(prevData.categorias[name]) // Verifica si la propiedad es un array
          ? checked
            ? [...prevData.categorias[name], value] // Añade el valor si está marcado
            : prevData.categorias[name].filter((item) => item !== value) // Elimina el valor si está desmarcado
          : checked // Si la propiedad no es un array, simplemente usa el valor booleano
          ? value
          : "", // Si está desmarcado, establece un valor vacío o el valor por defecto según tu lógica
      },
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(dataBase, "destinos"), formData);
      Swal.fire({
        icon: "success",
        title: "Destino agregado exitosamente!",
        showConfirmButton: false,
        timer: 1500,
      });
      setFormData({
        nombre: "",
        nombreMunicipio: "",
        descripcion: "",
        imagen: [],
        caracteristicas: {
          descripcion: "",
          tipo: "",
          titulo: "",
        },
        categorias: {
          motivo: [],
          clima: "",
          interesViaje: [],
          emociones: [],
          actividades: [],
          tipoDestino: "",
          acompanamiento: [],
        },
        ubicacion: {
          latitud: "",
          longitud: "",
        },
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al agregar destino",
        text: error.message,
      });
    }
  };

  return (
    <div className={"form-container"}>
      <h2>Agregar Nuevo Destino</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={handleChange}
        />
        <input
          type="text"
          name="nombreMunicipio"
          placeholder="Nombre Municipio"
          onChange={handleChange}
        />
        <textarea
          name="descripcion"
          placeholder="Descripción"
          onChange={handleChange}
        />
        <h3 style={{ marginBottom: "20px" }}>Imágenes</h3>
        {formData.imagen.map((img, index) => (
          <div key={index} className="image-field">
            <input
              style={{ marginBottom: "10px", width: "80%" }}
              type="text"
              placeholder={`URL de la Imagen ${index + 1}`}
              value={img}
              onChange={(e) => handleImageChange(e, index)}
            />
            <button
              style={{ marginLeft: "10px" }}
              type="button"
              onClick={() => removeImageField(index)}
            >
              Eliminar
            </button>
          </div>
        ))}
        <button type="button" onClick={addImageField}>
          Añadir Nueva Imagen
        </button>

        <h3 style={{ marginBottom: "20px" }}>Características</h3>
        <input
          type="text"
          name="caracteristicas.descripcion"
          placeholder="Descripción Características"
          onChange={handleChange}
        />
        <input
          type="text"
          name="caracteristicas.tipo"
          placeholder="Tipo Características"
          onChange={handleChange}
        />
        <input
          type="text"
          name="caracteristicas.titulo"
          placeholder="Título Características"
          onChange={handleChange}
        />
        <h3 style={{ marginBottom: "20px" }}>Categorías</h3>
        <div className={"select-wrapper"}>
          <label>Tipo de Destino:</label>
          <select name="categorias.tipoDestino" onChange={handleChange}>
            <option value="">Seleccione...</option>
            <option value="Campo">Campo</option>
            <option value="Pueblito">Pueblito</option>
            <option value="Playa">Playa</option>
            <option value="Montaña">Montaña</option>
            <option value="Ciudad">Ciudad</option>
          </select>
        </div>

        <div className={"select-wrapper"}>
          <label>Clima:</label>
          <select name="categorias.clima" onChange={handleChange}>
            <option value="">Seleccione...</option>
            <option value="Clima de montaña">Clima de montaña</option>
            <option value="Clima de páramo">Clima de páramo</option>
            <option value="Clima tropical de sabana">
              Clima tropical de sabana
            </option>
            <option value="Clima tropical húmedo">Clima tropical húmedo</option>
          </select>
        </div>

        <div className={"checkbox-group"}>
          <label>Motivo:</label>
          <div className="checkbox-container">
            <input
              type="checkbox"
              name="motivo"
              value="Aventura"
              onChange={handleCheckboxChange}
            />
            <span>Aventura</span>
            <input
              type="checkbox"
              name="motivo"
              value="Deporte"
              onChange={handleCheckboxChange}
            />
            <span>Deporte</span>
            <input
              type="checkbox"
              name="motivo"
              value="Vacaciones"
              onChange={handleCheckboxChange}
            />
            <span>Vacaciones</span>
            <input
              type="checkbox"
              name="motivo"
              value="Cultura"
              onChange={handleCheckboxChange}
            />
            <span>Cultura</span>
          </div>
        </div>
        <div className={"checkbox-group"}>
          <label>Intereses de Viaje:</label>
          <div className="checkbox-container">
            <input
              type="checkbox"
              name="interesViaje"
              value="Gastronomía"
              onChange={handleCheckboxChange}
            />
            <span>Gastronomía</span>
            <input
              type="checkbox"
              name="interesViaje"
              value="Historia"
              onChange={handleCheckboxChange}
            />
            <span>Historia</span>
            <input
              type="checkbox"
              name="interesViaje"
              value="Cultura"
              onChange={handleCheckboxChange}
            />
            <span>Cultura</span>
            <input
              type="checkbox"
              name="interesViaje"
              value="Arquitectura"
              onChange={handleCheckboxChange}
            />
            <span>Arquitectura</span>
            <input
              type="checkbox"
              name="interesViaje"
              value="Presupuesto"
              onChange={handleCheckboxChange}
            />
            <span>Presupuesto</span>
            <input
              type="checkbox"
              name="interesViaje"
              value="Actividades"
              onChange={handleCheckboxChange}
            />
            <span>Actividades</span>
          </div>
        </div>
        <div className={"checkbox-group"}>
          <label>Emociones:</label>
          <div className="checkbox-container">
            <input
              type="checkbox"
              name="emociones"
              value="Emoción"
              onChange={handleCheckboxChange}
            />
            <span>Emoción</span>
            <input
              type="checkbox"
              name="emociones"
              value="Gratitud"
              onChange={handleCheckboxChange}
            />
            <span>Gratitud</span>
            <input
              type="checkbox"
              name="emociones"
              value="Calma"
              onChange={handleCheckboxChange}
            />
            <span>Calma</span>
            <input
              type="checkbox"
              name="emociones"
              value="Pertenencia"
              onChange={handleCheckboxChange}
            />
            <span>Pertenencia</span>
            <input
              type="checkbox"
              name="emociones"
              value="Asombro"
              onChange={handleCheckboxChange}
            />
            <span>Asombro</span>
            <input
              type="checkbox"
              name="emociones"
              value="Felicidad"
              onChange={handleCheckboxChange}
            />
            <span>Felicidad</span>
          </div>
        </div>
        <div className={"checkbox-group"}>
          <label>Actividades:</label>
          <div className="checkbox-container">
            <input
              type="checkbox"
              name="actividades"
              value="Ruta en cuatrimoto"
              onChange={handleCheckboxChange}
            />
            <span>Ruta en cuatrimoto</span>
            <input
              type="checkbox"
              name="actividades"
              value="Cabalgatas"
              onChange={handleCheckboxChange}
            />
            <span>Cabalgatas</span>
            <input
              type="checkbox"
              name="actividades"
              value="Senderismo"
              onChange={handleCheckboxChange}
            />
            <span>Senderismo</span>
            <input
              type="checkbox"
              name="actividades"
              value="Escalar al aire libre"
              onChange={handleCheckboxChange}
            />
            <span>Escalar al aire libre</span>
            <input
              type="checkbox"
              name="actividades"
              value="Canopy"
              onChange={handleCheckboxChange}
            />
            <span>Canopy</span>
            <input
              type="checkbox"
              name="actividades"
              value="Pesca deportiva"
              onChange={handleCheckboxChange}
            />
            <span>Pesca deportiva</span>
            <input
              type="checkbox"
              name="actividades"
              value="Parapente"
              onChange={handleCheckboxChange}
            />
            <span>Parapente</span>
            <input
              type="checkbox"
              name="actividades"
              value="Camping"
              onChange={handleCheckboxChange}
            />
            <span>Camping</span>
            <input
              type="checkbox"
              name="actividades"
              value="Canotaje"
              onChange={handleCheckboxChange}
            />
            <span>Canotaje</span>
            <input
              type="checkbox"
              name="actividades"
              value="Retiros espirituales"
              onChange={handleCheckboxChange}
            />
            <span>Retiros espirituales</span>
          </div>
        </div>
        <div className={"checkbox-group"}>
          <label>Acompañamiento:</label>
          <div className="checkbox-container">
            <input
              type="checkbox"
              name="acompañamiento"
              value="Pareja"
              onChange={handleCheckboxChange}
            />
            <span>Pareja</span>
            <input
              type="checkbox"
              name="acompanamiento"
              value="Amigos"
              onChange={handleCheckboxChange}
            />
            <span>Amigos</span>
            <input
              type="checkbox"
              name="acompanamiento"
              value="Familia"
              onChange={handleCheckboxChange}
            />
            <span>Familia</span>
            <input
              type="checkbox"
              name="acompanamiento"
              value="Solo"
              onChange={handleCheckboxChange}
            />
            <span>Solo</span>
          </div>
        </div>
        <button type="submit">Agregar Destino</button>
      </form>
    </div>
  );
};
export default AddDestination;
