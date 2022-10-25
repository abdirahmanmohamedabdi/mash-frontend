import React, { useEffect, useState } from "react";
import { gapi} from "gapi-script";
import Navigation from "./components/Navbar";
import { AuthProvider } from "./components/AuthProvider";

import { Home } from "./pages/Home"
import SignUpForm from "./pages/Signup"
import Login from "./pages/Login";
import Event from "./components/Event";

import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  const [events, setEvents] = useState([]);

  const calendarID = process.env.REACT_APP_CALENDER_ID;
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN; 

  const getEvents = (calendarID, apiKey) =>{
    function initiate() {
      gapi.client 
      .init({
        apiKey: apiKey,
      })
      .then(function (){
        return gapi.client.request({
          path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`
        });
      })
      .then ((response) => {
        let events = response.result.items;
        setEvents(events) ;
      }, 
      function (err){
        return [false, err];
      }
      );
    }
    gapi.load("client", initiate);

  };
  useEffect(() => {
    const events = getEvents(calendarID, apiKey);
    setEvents(events);
  }, []);

  const addEvent = (calendarID, event) => {
    function initiate() {
      gapi.client
      .request({
        path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
        method: 'POST',
        body: event,
        headers: {
          "Content-Type": "application/json", 
          Authorization: `Bearer ${accessToken}`,
        }, 
      })
      .then(
        (response) => {
          return [true, response];
        },
        function (err) {
          console.log(err);
          return [false, err]; 
        }
      );
    }
    gapi.load("client", initiate);
  }

  return (
    <AuthProvider>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <div className = "App py-8 flex-col justify-center">
      <h1 className="text-2xl font-bold mb-4">
        Google Calendar
        <ul>
          {events?.map((event) => (
            <li key={event.id} className="flex justify-center">
              <Event description={event.summary} />
            </li>
          ))}
        </ul>
      </h1>
      </div>
    </AuthProvider>
  );
}

export default App;
