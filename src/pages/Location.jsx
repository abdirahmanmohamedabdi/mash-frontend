import { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { AuthContext } from "../components/AuthProvider";
import { Navigate } from "react-router-dom";
import googleMapStyles from "../components/googleMapStyles";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Time from "../components/Button";

function MapCtx(props) {}

//
//
// }
function Location(props) {
  const [position, setPosition] = useState({});
  const [show, setShow] = useState(true);
  let [track, setTrack] = useState(true);
  const [gps, setGps] = useState({});
  const [fetched, setFetched] = useState(false);
  const userid = localStorage.getItem('userid')
  const postLocation = (longitude, latitude) => {
    fetch(`http://127.0.0.1:3000/locations/${userid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ longitude, latitude }),
    })
      .then((res) => {
        if (res.status == 200) {
        } else {
          console.log(res);
          alert("Something went wrong");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong");
      });
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function ({ coords }) {
        console.log(coords);
        setPosition({ lat: coords.latitude, lng: coords.longitude });
        postLocation(coords.longitude, coords.latitude);
        setFetched(true);
      });
    }
  }, []);

  return (
    <div className="mapser">
      {fetched && (
        <>
          {show && (
            <div>
              <button className="signout" onClick={() => setShow(!show)}>
                Turn On
              </button>
              <h2 className="sign">Enjoy Your Break</h2>
            </div>
          )}

          {!show && (
            <div>
              <button className="signout" onClick={() => setShow(!show)}>
                Turn OFF{" "}
              </button>

              <Container fluid>
                <Row>
                  <Col md={4}>md=4</Col>
                  <Map
                    // style={style}
                    google={props.google}
                    initialCenter={position}
                  >
                    <Marker />
                  </Map>
                </Row>
              </Container>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCaER0ajGWK9yiHn-W0roUE3vpTHUzyQEg",
})(Location);
