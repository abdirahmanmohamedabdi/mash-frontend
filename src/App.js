import React from "react";
import Navigation from "./components/Navbar";
import { AuthProvider } from "./components/AuthProvider";
import Location from "./pages/Location";
import { Home } from "./pages/Home"
import MerchandiserCard from "./components/MerchandiserCard";
import SignUpForm from "./pages/Signup"
import Login from "./pages/Login";
import Google from "./components/Google";
import Routeplan from "./pages/Routeplan";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard"
import Sidebar from "./components/Sidebar";
import "./App.css";
import { Routes, Route,Navigate } from "react-router-dom";
import Manager from "./pages/Manager";
import Signup from "./pages/Signup";
import MerchandisersContainer from "./components/MerchandisersContainer";
import Merchants from "./pages/Merchants";
function App() {
  return (
    <AuthProvider>
      <div className="App">
      <Navigation />
        <div>
        <Sidebar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUpForm />} />
          
          <Route path="/manager" element={<Manager/>}>
              <Route path="/manager/merchandisers" element={<Merchants />} />
              <Route path="/manager/locations" element={<Google />} />
              <Route path="/manager/routes" element={<Routeplan />} />
          </Route>
          <Route path="/location" element={<Location />}> </Route>
          <Route path="/manager" element={<Manager />}> </Route>
          <Route path="/Routeplan" element={<Routeplan />}> </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <Google /> */}
        < Contact />
      </div>
    </AuthProvider>
  );
}

export default App;
