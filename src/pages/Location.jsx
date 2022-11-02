import { useState, useEffect, useContext } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { Navigate } from "react-router-dom";
import { Row, Col, Card, Button,Container, ToggleButton } from "react-bootstrap";
import Time from "../components/Button";

function MapCtx(props) {}

//
//
// }
function Location(props) {
  const [position, setPosition] = useState({});
  let [track, setTrack] = useState(true);
  const [fetched, setFetched] = useState(false);
  const handleChange = () => {
    return setTrack(!track);
  };

  const style = {
    width: '100%',
    height: '100%'
  }
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function ({ coords }) {
        console.log(coords);
        setPosition({ lat: coords.latitude, lng: coords.longitude });
        setFetched(true);
      });
    }
  }, []);

  return (
      <div>
      {fetched && (
        <>
        <ToggleButton onClick={() => handleChange()}></ToggleButton>
      {track ? "on" : "off"}
    
        <Map style={style} google={props.google} initialCenter={position}>
          <Marker />
        </Map>
        </>)}
      </div>
  );
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCaER0ajGWK9yiHn-W0roUE3vpTHUzyQEg",
})(Location);
