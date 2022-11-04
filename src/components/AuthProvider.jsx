import {createContext,useState,useEffect} from "react";


export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState([]);
    const [role,setRole] = useState([])
    const [userId, setUserId] = useState(null)
    let [isAuth, handleAuthorized] = useState(false);

    useEffect(() => {
      const localToken = localStorage.getItem('token')
      const localRole = localStorage.getItem('role')
      const localUserId = localStorage.getItem('userid')

      localToken ? setToken(localToken) : setToken(null)
      localRole ? setRole(localRole) : setRole('guest')
      localUserId ? setUserId(localUserId) : setUserId(null)
    })
    const handleLogin = (token,role,userid) => {
      localStorage.setItem('token',token)
      localStorage.setItem('role',role)
      localStorage.setItem('userid',userid)
      setToken(token);
      setRole(role)
      setUserId(userId)
    };
  
    const handleLogout = () => {
      localStorage.removeItem('token')
      localStorage.removeItem('role')
      localStorage.removeItem('userid')
      setToken(null);
      setRole('guest')
      setUserId(null)
    };

    const value = {
      role,
      token,
      userId,
      onLogin: handleLogin,
      onLogout: handleLogout,
    };
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  };