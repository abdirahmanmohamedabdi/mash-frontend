import React from "react";
import Form from 'react-bootstrap/Form';

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
    const [token, setToken] = React.useState(null);
    const [userType,setUserType] = React.useState(null)
  
    const handleLogin = async () => {
      const token = 'blahhhhhhh'
      setToken(token);
    };
  
    const handleLogout = () => {
      setToken(null);
    };
  
    const value = {
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