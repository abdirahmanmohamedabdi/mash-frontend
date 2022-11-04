import React from "react";
import { AuthProvider } from "./components/AuthProvider";

import Login from "./pages/Login";
import Location from "./pages/Location";
import StripedRowExample from "./components/MerchandisersContainer";
import Signup from "./pages/Signup";

import { Home } from "./pages/Home";
import { ManagerLayout } from "./layouts/ManagerLayout";
import { MerchandiserLayout } from "./layouts/MerchandiserLayout";

import Navigation from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Routeplan from "./pages/Routeplan";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard"
import Outlet from "./pages/Outlet";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Manager from "./pages/Manager";
import Merchants from "./pages/Merchants";
import Events from "./pages/Events";
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<ManagerLayout />}>
            <Route path="/manager/merchandisers" element={<StripedRowExample />} />
            {/* <Route path="/manager/locations" element={<Locations />} /> */}
            <Route path="/manager/routes" element={<Routeplan />} />
          </Route>
          <Route element={<MerchandiserLayout />}>
            <Route path="/location" element={<Location />} /> 
          </Route>
        </Routes>
      </div>
    </AuthProvider>

   
  );
}

export default App;
