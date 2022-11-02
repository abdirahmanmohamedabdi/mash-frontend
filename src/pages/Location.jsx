import { useState, useEffect, useContext } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { AuthContext } from "../components/AuthProvider";
import { Navigate } from "react-router-dom";
import Time from "../components/Button";
function MapCtx(props) {}

//
//
// }
function Location(props) {

 
  const { token, role } = useContext(AuthContext);
  const [position, setPosition] = useState({});
  // const state = {
  //   status: false,
  //   switchButton: "Off",
  // };
  const [fetched, setFetched] = useState(false);
  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function ({ coords }) {
        console.log(coords)
        setPosition({ lat: coords.latitude, lng: coords.longitude });
        setFetched(true);
      });
    }
  }, []);
  if (!token && role !== "merch") {
    return <Navigate to="/" replace />;
  }

  
  
  return (
  
    <div className="Mapstyles">



     <div>
   
     </div>
      {fetched && (
        <Map google={props.google} initialCenter={position}>
          <Marker />
        </Map>
      )}
    </div>
  );
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCaER0ajGWK9yiHn-W0roUE3vpTHUzyQEg",
})(Location);
