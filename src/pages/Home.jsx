import React from 'react'
import MerchandisersContainer from '../components/MerchandisersContainer';
import { AuthContext } from '../components/AuthProvider';


export const Home = () => {
  const { token } = React.useContext(AuthContext);
  return (
    <div>
      {/* {token} */}
      <header style={{ paddingLeft: 0 }}>
      <div
        className=''
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1624026676760-53603406ac94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')", backgroundSize: 'cover', position: 'relative', backgroundRepeat: 'no-repeat' }}
      >
       
          <div className='d-flex justify-content-center align-items-center h-100'>
          <div className="random">
  
    <h1 className="display-6">Mash-Industries</h1>
    <p className="lead">Mash industries Ltd is a company manufacturing Fast-Moving Consumer Goods (FMCG)  such as Soap, Cooking Oil, etc. The company sales’ department has hundreds of salespeople named merchandisers reporting about their product insights to the HQ on a daily basis.
</p>
  

          </div>
        </div>
      </div>
    </header>
      


    
    </div>
  )
}
