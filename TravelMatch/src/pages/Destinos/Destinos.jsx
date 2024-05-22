import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetDestinos } from '../../redux/destinos/destinosActions';
import Cards from "../../components/Cards/Cards";
import './destinos.scss';

function Destinos() {
  const dispatch = useDispatch();
  const { destinos } = useSelector((store) => store.destinos);

  useEffect(() => {
    dispatch(actionGetDestinos());
  }, [dispatch]);


  return (
    <div className="destinosCards">
      {destinos.length
        ? destinos.map((item) => <Cards key={item.id} destino={item} />)
        : null}
    </div>
  );
}

export default Destinos;
