import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionGetDestinos } from "../../redux/destinos/destinosActions";
import Cards from "../../components/Cards/Cards";
import "./destinos.scss";

function Destinos() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { destinos } = useSelector((store) => store.destinos);

  useEffect(() => {
    dispatch(actionGetDestinos()).finally(() => setLoading(false));
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className="loading">Cargando...</div>
      ) : (
        <div className="destinosCards">
          {destinos.length ? (
            destinos.map((item) => <Cards key={item.id} destino={item} />)
          ) : (
            <p>No hay destinos disponibles.</p>
          )}
        </div>
      )}
      <button
        className="floating-button"
        onClick={() => navigate("/addDestination")}
      >
        +
      </button>
    </>
  );
}

export default Destinos;
