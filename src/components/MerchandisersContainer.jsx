import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Card from "./MerchandiserCard";


function MerchandisersContainer(){
  const apiUrl = "http://127.0.0.1:3000/merchandisers";
  let [merchandisers, setMerchandisers] = useState([]);

 

  useEffect(() => {
    fetch(apiUrl)
       .then((res) => res.json())
    //  .then(data => console.log(data))
     .then((res) => setMerchandisers(res));
  },[]);
    
  const arrMerchandiser = merchandisers.map((eng, idx) => (
    <tr key={idx}>
      <td>{eng.id}</td>
      <td>{eng.username}</td>
      <td>{eng.phone_number}</td>
      <td>{eng.email}</td>
      <td>{eng.action}</td>
    </tr>
  ));
  

    
  return <div >  
     <Table responsive="xl" >
  <thead>
    <tr>
      <th>#
        
      </th>
      <th>Username</th>
      <th>Phone Number</th>
      <th>Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
   {arrMerchandiser}
  </tbody>
</Table></div>


}

export default MerchandisersContainer;