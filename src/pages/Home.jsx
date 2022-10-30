import React from 'react'
import Route from "../pages/Route"
import { AuthContext } from '../components/AuthProvider';
import Merchants from '../components/Merchants'

export const Home = () => {
  const { token } = React.useContext(AuthContext);
  return (
    <div>Home {token}
    <Merchants />

    <Route />
    
    </div>
  )
}
