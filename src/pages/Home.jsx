import React from 'react'
import Route from "../pages/Route"
import { AuthContext } from '../components/AuthProvider';


export const Home = () => {
  const { token } = React.useContext(AuthContext);
  return (
    <div>Home {token}

    <Route />
    
    </div>
  )
}
