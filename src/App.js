import React, { useEffect, useState } from "react";
import { gapi} from "gapi-script";
import Navigation from "./components/Navbar";
import { AuthProvider } from "./components/AuthProvider";

import { Home } from "./pages/Home"
import SignUpForm from "./pages/Signup"
import Login from "./pages/Login";

import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {

  const calenderID = process.env.REACT_APP_CALENDER_ID;
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN; 

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
      <div className = "App pt-4">
      <h1 className="text-2xl font-bold mb-4">
        React App with Google Calendar API!
      </h1>
      </div>
    </AuthProvider>
  );
}

export default App;
