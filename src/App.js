import React from "react";
import Navigation from "./components/Navbar";
import { AuthProvider } from "./components/AuthProvider";

import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup";
import Login from "./pages/Login";

import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
