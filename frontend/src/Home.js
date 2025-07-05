import React, { useState } from "react";

function Home() {
      const [robotPosition, setRobotPosition] = useState({ lat: 12.9716, lng: 77.5946 });
      const [obstacles] = useState([
        { lat: 12.9718, lng: 77.5944 },
        { lat: 12.9715, lng: 77.5947 },
      ]);
      const [path] = useState([
        [12.9716, 77.5946],
        [12.9717, 77.5945],
        [12.9718, 77.5944],
      ]);
    
  return (
    <div>
        <div className="text-center p-5">
        <h1 className="text-2xl font-bold text-blue-800 mb-4">Welcome to Farm Robot Dashboard</h1>
        <p className="mb-4">Monitor your autonomous robot's activity, track its path, receive alerts, and access live camera feeds all in one place.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded shadow">
            <h2 className="font-semibold text-lg">Map</h2>
            <p>See the robot’s path and obstacles detected during patrol.</p>
            </div>
            <div className="p-4 border rounded shadow">
            <h2 className="font-semibold text-lg">Live Cam</h2>
            <p>Watch real-time video feed from the robot’s camera.</p>
            </div>
            <div className="p-4 border rounded shadow">
            <h2 className="font-semibold text-lg">Commands</h2>
            <p>Send start/stop commands and interact with the robot remotely.</p>
            </div>
        </div>
        </div>
        {/* ROBOT POSITION */}
        <div className="mb-5">
          <h2 className="text-blue-800">Robot Position:</h2>
          <p>Latitude: {robotPosition.lat}</p>
          <p>Longitude: {robotPosition.lng}</p>
        </div>

      {/*OBSTACLES*/}
        <div className="mb-5">
          <h2 className="text-blue-800">Obstacles:</h2>
          <ul className="list-disc pl-5">
            {obstacles.map((obs, i) => (
              <li key={i}>Lat: {obs.lat}, Lng: {obs.lng}</li>
            ))}
          </ul>
        </div>

      {/*PATH*/}
        <div className="mb-5">
          <h2 className="text-blue-800">Path:</h2>
          <ul className="list-disc pl-5">
            {path.map((p, i) => (
              <li key={i}>Lat: {p[0]}, Lng: {p[1]}</li>
            ))}
          </ul>
        </div>
</div>
  );
}

export default Home;