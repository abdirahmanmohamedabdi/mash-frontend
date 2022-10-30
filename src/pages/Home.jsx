import React from 'react'
import { AuthContext } from '../components/AuthProvider';
import Merchants from '../components/Merchants'

export const Home = () => {
  const { token } = React.useContext(AuthContext);
  return (
    <div>Home {token}
    <Merchants />
    </div>
  )
}
