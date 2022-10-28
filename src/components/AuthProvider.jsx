import React from "react";
import Form from 'react-bootstrap/Form';

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
    const [token, setToken] = React.useState(null);
    const [role,setRole] = React.useState("guest")
  
    const handleLogin = (token,role) => {
      setToken(token);
      setRole(role)
    };
  
    const handleLogout = () => {
      setToken(null);
    };

    const value = {
      role,
      token,
      onLogin: handleLogin,
      onLogout: handleLogout,
    };
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  };