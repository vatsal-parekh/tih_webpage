import React, { useState } from "react";
import {Router, Routes, Route, Link } from "react-router-dom";
import MapView from "./MapView";
import MapPage from "./MapPage";
import Home from "./Home";
import CommandPage from "./commandpage";
import LiveCamPage from "./LiveCamPage";

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
<>
      {/* Header */}
      <header className="fixed top-0 z-20 flex w-full items-center justify-between bg-blue-400 opacity-90 text-white p-2">
        <div className="flex items-center gap-1">
          <span>Farm Dashboard</span>
        </div>

        <div className="lg:text-base flex text-xs font-semibold max-md:hidden md:gap-3 lg:gap-5">
          <Link to="/" className="navbar_btn">HOME</Link>
          <Link to="/map" className="navbar_btn">MAP</Link>
          <Link to="/commands" className="navbar_btn">COMMANDS</Link>
          <Link to="/live-cam" className="navbar_btn">LIVE-CAM</Link>
        </div>

        <div className="relative group">
          <button id="menuButton" className="navbar_btn p-2">
            <i class="fa-solid fa-bell"></i>
          </button>

      {/*ALERTS*/}
          <div
            id="dropdownMenu"
            className="z-[9999] absolute text-black bg-white border border-blue-900 shadow-lg w-60 group-hover:block hidden right-0"
          >
            <h3>Notifications</h3>
            <hr class="border-t border-gray-300" />
            <div className="mt-3">
            <h4 className="text-sm font-medium">Alerts:</h4>
            <ul className="list-disc pl-5 text-sm text-red-600">
              {alerts.map((a, i) => (
                <li key={i}>{a}</li>
      ))}
    </ul>
  </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="p-5 pt-24 "> {/* pt-24 to avoid content being hidden behind fixed header */}

      {/*ROBOT POSITION
        <div className="mb-5">
          <h2 className="text-blue-800">Robot Position:</h2>
          <p>Latitude: {robotPosition.lat}</p>
          <p>Longitude: {robotPosition.lng}</p>
        </div>

      {/*OBSTACLES*}
        <div className="mb-5">
          <h2 className="text-blue-800">Obstacles:</h2>
          <ul className="list-disc pl-5">
            {obstacles.map((obs, i) => (
              <li key={i}>Lat: {obs.lat}, Lng: {obs.lng}</li>
            ))}
          </ul>
        </div>

        PATH
        <div className="mb-5">
          <h2 className="text-blue-800">Path:</h2>
          <ul className="list-disc pl-5">
            {path.map((p, i) => (
              <li key={i}>Lat: {p[0]}, Lng: {p[1]}</li>
            ))}
          </ul>
        </div> */}

        
      {/*MAP*/}
        {/* <div className="relative z-0">
          <h1>MapView</h1>
          <MapView robotPosition={robotPosition} obstacles={obstacles} path={path} />
        </div> */}

      {/* COMMANDS*/}
        {/* <div className="mt-5">
          <button className="m-2 rounded-lg border-2 border-solid group hover:bg-green-500 backdrop-invert-50 p-3 max-md:hidden" onClick={simulateStart} style={{ marginRight: "10px" }}>
            Start Patrol
          </button>
          <button className="m-2 rounded-lg border-2 border-solid group hover:bg-green-500 backdrop-invert-50 p-3 max-md:hidden" onClick={simulateStop}>Stop Patrol</button>
        </div> */}

      {/*LIVE-CAM*/}
        {/* <div className="mt-5">
          <h3 className="text-blue-800">Live Camera Feed:</h3>
          <img
            src="http://localhost:5000/video"
            alt="Live Feed"
            style={{ width: "50%", border: "1px solid #ccc" }}
          />
        </div> */}
        <div className="mt-5">
          <Routes>
            <Route path="/map" element={<MapPage robotPosition={robotPosition} obstacles={obstacles} path={path} />} />
            <Route path="/" element={<Home/>} />
            <Route path="/commands" element={<CommandPage simulateStart={simulateStart} simulateStop={simulateStop} />} />
             <Route path="/live-cam" element={<LiveCamPage />} />
          </Routes>
          </div>
      </div>
    </>
  );
}

export default App;