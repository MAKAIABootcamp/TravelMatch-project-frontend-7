import React, { createContext, useContext, useEffect, useState } from 'react';
import { LoadScript } from "@react-google-maps/api";

const GOOGLE_MAPS_API_KEY = "AIzaSyBPD4u4W-SZXZLONMNNjgiSenDZPt1_OqM";
const GoogleMapsContext = createContext();

export const GoogleMapsProvider = ({ children }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const checkIfGoogleMapsIsLoaded = () => {
      if (window.google && window.google.maps) {
        setLoaded(true);
      }
    };
    checkIfGoogleMapsIsLoaded();
  }, []);

  return (
    <LoadScript
      googleMapsApiKey={GOOGLE_MAPS_API_KEY}
      onLoad={() => setLoaded(true)}
    >
      {loaded ? (
        <GoogleMapsContext.Provider value={null}>
          {children}
        </GoogleMapsContext.Provider>
      ) : (
        <div>Loading...</div>
      )}
    </LoadScript>
  );
};

export const useGoogleMaps = () => useContext(GoogleMapsContext);
