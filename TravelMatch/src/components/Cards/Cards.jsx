import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionDeleteDestinos } from "../../redux/destinos/destinosActions";
import Swal from "sweetalert2";
import "./cards.scss";

function Cards({ destino = null }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.userAuth.user);

  const handleDelete = (destinoId) => {
    Swal.fire({
      title: "¿Estás seguro que quieres eliminar este destino?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      denyButtonText: `No Eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(actionDeleteDestinos(destinoId))
        Swal.fire("¡Eliminado!", "El destino se ha eliminado exitosamente", "success");
      } else if (result.isDenied) {
        Swal.fire("Se ha descartado la acción", "", "info");
      }
    });
    
  }
  return (
    <div className="destinoCard">
      {destino && Object.entries(destino) ? (
        <div>
          <img
            src={destino?.imagen[0]}
            alt={destino?.nombre}
            className="destinoCard__image"
          />
          <h2 className="destinoCard__title">{destino?.nombreMunicipio}</h2>
          <h3 className="destinoCard__subtitle">{destino?.nombre}</h3>
          <p className="destinoCard__description">{destino?.descripcion}</p>
          <button
            onClick={() => {
              console.log("Hice click");
              navigate(`/Detalle/${destino?.id}`);
            }}
          >
            Ir a detalles
          </button>
          <button onClick={() => handleDelete(destino.id)}>Eliminar</button>
          <button>Editar</button>
          {/* {
            user?.role === 'admin' ? <div>
              <button>Editar</button>
              <button onClick={()=>handleDelete(destino.id)}>Eliminar</button>
            </div>:null
          } */}
        </div>
      ) : null}
    </div>
  );
}

export default Cards;
