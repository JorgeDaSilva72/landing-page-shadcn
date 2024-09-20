import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { MapContainer, TileLayer, Polygon, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Nécessaire pour afficher les marqueurs correctement
// delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Définissez un type pour les coordonnées
type LatLngTuple = [number, number];

const AfriqueMap: React.FC = () => {
  // Coordonnées pour le Sénégal
  //   const senegal: LatLngTuple[] = [
  //     [14.0, -17.0],
  //     [14.0, -15.0],
  //     [12.0, -15.0],
  //     [12.0, -17.0],
  //   ];

  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          // setPosition(marker.getLatLng())
          console.log(marker.getLatLng());
        }
      },
    }),
    []
  );
  useEffect(() => {
    console.log(markerRef.current);
  }, [markerRef.current]);

  return (
    <div className=" mx-auto ">
      {/* <h1>Carte Interactive de l'Afrique</h1> */}
      <MapContainer
        center={[1.5, 17]}
        zoom={3}
        scrollWheelZoom={false}
        style={{ height: "600px", width: "400px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {/* <Polygon positions={senegal}>
          <Popup>Sénégal</Popup>
        </Polygon> */}
        {/* Ajoutez d'autres polygones pour d'autres pays ici */}
        <Marker
          eventHandlers={eventHandlers}
          position={[40.8054, -74.0241]}
          draggable={true}
          ref={markerRef}
        >
          <Popup>Hey ! you found me</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default AfriqueMap;
