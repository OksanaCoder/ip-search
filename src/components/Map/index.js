import { useState, useEffect } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";

const Map = ({ data }) => {
  const [coordinates, setCoordinates] = useState([6, 34]);
  useEffect(() => {
    if (data?.location?.lat && data?.location?.lon) {
      const lat = parseFloat(data.location.lat);
      const lng = parseFloat(data.location.lng);

      setCoordinates([lat, lng]);
    }
  }, [data]);
  return (
    <div className="mt-3">
      <MapContainer
        center={coordinates}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={coordinates}></Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
