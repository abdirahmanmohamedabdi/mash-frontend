import React, { Component } from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";

class Mapers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: { lat: 24.886, lng: -70.268 },
      link: ""
    };
  }

  onMapClick = e => {
    console.log(e.latLng.lat());

    this.setState({
      link:
        "https://www.google.com/maps/search/?api=1&query=" +
        e.latLng.lat() +
        "," +
        e.latLng.lng()
    });
  };

  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={this.state.center}
        defaultZoom={3}
        onClick={this.onMapClick}
      />
    ));

    return (
      <div>
        <p>Click the map to get link of coordinate</p>
        {this.state.link !== "" && (
          <a href={this.state.link}>{this.state.link}</a>
        )}
        <GoogleMapExample
          containerElement={<div style={{ height: `500px`, width: "500px" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Mapers;