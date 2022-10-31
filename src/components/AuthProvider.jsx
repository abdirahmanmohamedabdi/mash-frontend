import {createContext,useState,useEffect} from "react";
import Form from 'react-bootstrap/Form';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [role,setRole] = useState("guest")
    let [isAuth, handleAuthorized] = useState(false);
    useEffect(() => {
      const localToken = localStorage.getItem('token')
      const localRole = localStorage.getItem('role')
      if(localToken) {
        setToken(localToken)
      }
      if(localRole){
        setRole(localRole)
      }
    })
    const handleLogin = (token,role) => {
      localStorage.setItem('token',token)
      localStorage.setItem('role',role)
      setToken(token);
      setRole(role)
    };
  
    const handleLogout = () => {
      localStorage.removeItem('token')
      localStorage.removeItem('role')
      setToken(null);
      setRole('guest')
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