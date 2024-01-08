import { useState, useEffect } from "react";
import { MapContainer, Marker, TileLayer, Icon } from "react-leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";

// import icon from "../../assets/images/marker-shadow.png";

const Map = ({ data }) => {
  const [coordinates, setCoordinates] = useState([6, 34]);
  useEffect(() => {
    if (data?.location?.lat && data?.location?.lon) {
      const lat = parseFloat(data.location.lat);
      const lng = parseFloat(data.location.lng);

      setCoordinates([lat, lng]);
    }
  }, [data]);
  const customIcon = icon({
    iconUrl: "../../assets/images/marker-shadow.png",
    iconSize: [50, 50],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });
  return (
    <div className="mt-3 map-container">
      <MapContainer
        center={coordinates}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={coordinates} icon={customIcon}></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
