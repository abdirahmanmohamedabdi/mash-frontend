import React from 'react'
import { AuthContext } from '../components/AuthProvider';


export const Home = () => {
  const { token } = React.useContext(AuthContext);
  return (
    <div>Home {token}</div>
  )
}
