import {useContext} from 'react'
import { AuthContext } from '../components/AuthProvider'

export default function Merchandiser() {
  const {token,role} = useContext(AuthContext)
  if(!token && role != 'merch'){
    
  }
  return (
    <div>Merchandiser</div>
  )
}
