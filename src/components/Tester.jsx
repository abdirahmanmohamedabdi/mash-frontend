import { FaErlang } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from "react";
function MyVerticallyCenteredModal(){
 
  
   
  
  const processManualLocation = () => {
    if (props.userState !== "" && props.userCity !== "") {
    let city = props.userCity // manual lat entry is already in store state
    let state = props.userPostalCode // manual long entry is already in store state
    // This fetch uses the API key stored in your fron-end .env file "process.env.REACT_APP_googleKey"
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=+${city},+${state}&key=${process.env.REACT_APP_googleKey}`
    fetch(url)
    .then(res => res.json())
    .then(res => {
    if (res.status === "OK") {
    getUserCoords(res.results)
    } else if (res.status === "ZERO_RESULTS") {
    alert('Unable to process this location. Please revise location fields and try submitting again.')
    }
    })
    } else {
    alert('Please ensure State and City are provided.')
    }
    }
    // Obtaining and dispatching lat and long coords from google geocoding API response
    const getUserCoords = (googleRes) => {
    let lat = googleRes[0].geometry.location.lat // You have obtained latitude coordinate!
    let long = googleRes[0].geometry.location.lng // You have obtained longitude coordinate!
    props.set_lat(lat) // dispatching to store state
    props.set_long(long) //dispatching to store state
    }
    
  
      
  
  
  
  }
  
  export default MyVerticallyCenteredModal;