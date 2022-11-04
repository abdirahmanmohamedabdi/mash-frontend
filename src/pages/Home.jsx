import React from 'react'
import MerchandisersContainer from '../components/MerchandisersContainer';
import { Container, Row, Col } from 'reactstrap';
import { AuthContext } from '../components/AuthProvider';
import Merchants from '../components/Merchants'

export const Home = () => {
  const { token } = React.useContext(AuthContext);
  return (
    <div>
      {/* {token} */}
      <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
       
              <h1 className="mb-4 font-weight-normal line-height-1_4">High Performance <span className="tagline">High Superiority</span></h1>
              <p className="text-muted mb-4 pb-2">Mash industries Ltd is a company manufacturing Fast-Moving Consumer Goods (FMCG)  such as Soap, Cooking Oil, etc</p>
              
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="https://images.unsplash.com/photo-1547895749-888a559fc2a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt="" className="img"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
      
</div>

    
    
  )}
