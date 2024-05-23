import PropTypes from "prop-types";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useGoogleMaps } from './MapsProvider';
import "./maps.scss";

const Maps = ({ lat, lng }) => {
  useGoogleMaps(); // Ensure the context is being used

  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: lat,
    lng: lng,
  };

  return (
    <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
      <Marker key="marker_1" position={defaultCenter} />
    </GoogleMap>
  );
};

Maps.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

export default Maps;
