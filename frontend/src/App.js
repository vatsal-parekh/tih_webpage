import React, { useState } from "react";
import MapView from "./MapView";

function App() {
  
  const [robotPosition, setRobotPosition] = useState({ lat: 12.9716, lng: 77.5946 });
  const [obstacles] = useState([
    { lat: 12.9718, lng: 77.5944 },
    { lat: 12.9715, lng: 77.5947 },
  ]);
  const [alerts, setAlerts] = useState([
    "Obstacle detected at (12.9718,77.5944)",
    "Low battery warning",
  ]);
  const [path] = useState([
    [12.9716, 77.5946],
    [12.9717, 77.5945],
    [12.9718, 77.5944],
  ]);

  const simulateStart = () => {
    setAlerts(prev => [...prev, "Start command sent!"]);
  };

  const simulateStop = () => {
    setAlerts(prev => [...prev, "Stop command sent!"]);
  };

    return (
    <div style={{ padding: "20px" }}>
      <h1>Farm Robot Dashboard (Offline Demo)</h1>

      <MapView robotPosition={robotPosition} obstacles={obstacles} path={path} />

      <div style={{ marginTop: "20px" }}>
        <button onClick={simulateStart} style={{ marginRight: "10px" }}>Start Patrol</button>
        <button onClick={simulateStop}>Stop Patrol</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Alerts:</h3>
        <ul>
          {alerts.map((a, i) => <li key={i}>{a}</li>)}
        </ul>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Live Camera Feed:</h3>
        <img
          src="http://localhost:5000/video"
          alt="Live Feed"
          style={{ width: "50%", border: "1px solid #ccc" }}
        />
      </div>

    </div>
  );
}

export default App;
