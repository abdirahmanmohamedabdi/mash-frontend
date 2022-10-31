import React, { useEffect, useState,useContext } from "react";
import { gapi} from "gapi-script";
import Navigation from "./components/Navbar";
import { AuthProvider } from "./components/AuthProvider";
import Location from "./pages/Location";
import { Home } from "./pages/Home"
import Routed from "./pages/Route";
import MerchandiserCard from "./components/MerchandiserCard";
import SignUpForm from "./pages/Signup"
import Login from "./pages/Login";
import Google from "./components/Google";
import Sidebar from "./components/Sidebar";
import "./App.css";
import { Routes, Route,Navigate } from "react-router-dom";
import Manager from "./pages/Manager";
import Signup from "./pages/Signup";

import MerchandisersContainer from "./components/MerchandisersContainer";

function App() {
  const [events, setEvents] = useState([]);
  // const calendarID = process.env.REACT_APP_CALENDER_ID;
  // const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  // const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN; 

  // const getEvents = (calendarID, apiKey) =>{
  //   function initiate() {
  //     gapi.client 
  //     .init({
  //       apiKey: apiKey,
  //     })
  //     .then(function (){
  //       return gapi.client.request({
  //         path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`
  //       });
  //     })
  //     .then ((response) => {
  //       let events = response.result.items;
  //       setEvents(events) ;
  //     }, 
  //     function (err){
  //       return [false, err];
  //     }
  //     );
  //   }
  //   gapi.load("client", initiate);

  // };
  // useEffect(() => {
  //   const events = getEvents(calendarID, apiKey);
  //   setEvents(events);
  // }, []);

  // const addEvent = (calendarID, event) => {
  //   function initiate() {
  //     gapi.client
  //     .request({
  //       path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
  //       method: 'POST',
  //       body: event,
  //       headers: {
  //         "Content-Type": "application/json", 
  //         Authorization: `Bearer ${accessToken}`,
  //       }, 
  //     })
  //     .then(
  //       (response) => {
  //         return [true, response];
  //       },
  //       function (err) {
  //         console.log(err);
  //         return [false, err]; 
  //       }
  //     );
  //   }
  //   gapi.load("client", initiate);
  // }

  return (
    <AuthProvider>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/signup" element={<SignUpForm />} />
          
          <Route path="/manager" element={<Manager/>}>
              <Route path="/manager/merchandisers" element={<MerchandisersContainer />} />
              <Route path="/manager/locations" element={<Google />} />
              <Route path="/manager/routes" element={<Routed />} />
          </Route>
          <Route path="/location" element={<Location />}> </Route>
          
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <Google /> */}
      </div>
      {/* <div className = "App py-8 flex-col justify-center">
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
      </div> */}
    </AuthProvider>
  );
}

export default App;
