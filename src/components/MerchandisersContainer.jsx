import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Card from "./MerchandiserCard";
import MyVerticallyCenteredModal from "./Tester"

function MerchandisersContainer(){
  const apiUrl = "http://127.0.0.1:3000/merchandisers";
  let [merchandisers, setMerchandisers] = useState([]);

 

  useEffect(() => {
    fetch(apiUrl)
       .then((res) => res.json())
      // .then(data => console.log(data))
      .then((res) => setMerchandisers(res));
  },[]);
    
  const arrMerchandiser = merchandisers.map((eng, idx) => (
    <tr key={idx}>
      <td>{eng.id}</td>
      <td><img className="profile"src={eng.image}/> </td>
      <td>{eng.username}</td>
      <td>{eng.phone_number}</td>
      <td>{eng.email}</td>
     <td>
     
      https://www.google.com/maps/@-1.3212194,36.6649299,15z
  
      
      </td>
    
     
</tr>
   
  ));
  

    
  return <div >  
     <Table responsive >
  <thead>
    <tr>
      <th>#
        
      </th>
      <th>Picture</th>
      <th>Username</th>
      <th>Phone Number</th>
      <th>Email</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
   {arrMerchandiser}
  </tbody>
</Table></div>


}

export default MerchandisersContainer;