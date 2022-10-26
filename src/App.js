import Navigation from "./components/Navbar";
import { AuthProvider } from "./components/AuthProvider";
import Location from "./pages/Location";
import { Home } from "./pages/Home"
import SignUpForm from "./pages/Signup"
import Login from "./pages/Login";
import Google from "./components/Google";

import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <AuthProvider>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/location" element={<Location />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Google />
      </div>
     
    </AuthProvider>
  );
}

export default App;
