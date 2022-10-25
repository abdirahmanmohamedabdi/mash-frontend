import { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

function MapCtx(props) {}
function handleSubmit(e){
    e.preventDefault()

    fetch('/api/location', {
        method:"POST",
        headers: {
            'contentType': 'application/json'
        },
        body: JSON.stringify()
    })
    .then(res => res.json())
    
}
function Location(props) {
  const [position, setPosition] = useState({});
  const state = {
    status: false,
    switchButton: "Off"
}
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
    <div className="Mapstyles">
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
