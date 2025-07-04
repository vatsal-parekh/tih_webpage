import React from "react";
import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";

function MapView({ robotPosition, obstacles, path }) {
  return (
    <MapContainer center={[robotPosition.lat, robotPosition.lng]} zoom={18} style={{ height: "500px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[robotPosition.lat, robotPosition.lng]}>
        <Popup>Robot Location</Popup>
      </Marker>
      {obstacles.map((obs, i) => (
        <Marker key={i} position={[obs.lat, obs.lng]}>
          <Popup>Obstacle {i + 1}</Popup>
        </Marker>
      ))}
      {path.length > 0 && <Polyline positions={path} color="blue" />}
    </MapContainer>
  );
}

export default MapView;
