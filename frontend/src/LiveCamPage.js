import React from "react";

function LiveCamPage() {
    return (
        <div className="mt-5">
          <h3 className="text-blue-800">Live Camera Feed:</h3>
          <img
            src="http://localhost:5000/video"
            alt="Live Feed"
            style={{ width: "50%", border: "1px solid #ccc" }}
          />
        </div>
    );
}
export default LiveCamPage;