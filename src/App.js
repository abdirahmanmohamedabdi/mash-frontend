import React from "react";
import Navigation from "./components/Navbar";
import { AuthProvider } from "./components/AuthProvider";
import Location from "./pages/Location";
import { Home } from "./pages/Home"
import SignUpForm from "./pages/Signup"
import Login from "./pages/Login";
import Google from "./components/Google";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard"
import Sidebar from "./components/Sidebar"

import "./App.css";
import { Routes, Route,Navigate } from "react-router-dom";
import Manager from "./pages/Manager";


function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navigation />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/location" element={<Location />}> </Route>
          <Route path="/manager" element={<Manager />}> </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Google />
      </div>
    </AuthProvider>
  );
}

export default App;
