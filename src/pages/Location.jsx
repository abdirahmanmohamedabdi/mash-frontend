import { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

function MapCtx(props) {}

function Location(props) {
  const [position, setPosition] = useState({});
  const [fetched, setFetched] = useState(false);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function ({ coords }) {
        setPosition({ lat: coords.latitude, lng: coords.longitude });
        setFetched(true)
      });
    }
  }, []);
  return (
    <div>
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
