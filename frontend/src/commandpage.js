import React from "react"

function CommandPage({ simulateStart, simulateStop }) {
  return (       
       <div className="mt-5">
        <h2 className="text-xl font-bold mb-4">Command Center</h2>
          <button className="m-2 rounded-lg border-2 border-solid group hover:bg-green-500 backdrop-invert-50 p-3 max-md:hidden" onClick={simulateStart} style={{ marginRight: "10px" }}>
            Start Patrol
          </button>
          <button className="m-2 rounded-lg border-2 border-solid group hover:bg-green-500 backdrop-invert-50 p-3 max-md:hidden" onClick={simulateStop}>Stop Patrol</button>
        </div>
          );
}

export default CommandPage;