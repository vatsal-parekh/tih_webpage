import react from "react";  
import MapView from "./MapView";

       
function MapPage({robotPosition, obstacles, path}) { 
    return(
               <div className="relative z-0">
          <h1>MapView</h1>
          <MapView robotPosition={robotPosition} obstacles={obstacles} path={path} />
        </div>
    );
}
export default MapPage;