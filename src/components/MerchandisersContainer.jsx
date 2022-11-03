import React, { useState, useEffect } from "react";

import Card from "./MerchandiserCard";


function MerchandisersContainer(){
  const apiUrl = "http://localhost:3000/merchandisers";
  let [merchandisers, setMerchandisers] = useState([]);

 

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
        // .then(data => console.log(data))
       .then((res) => setMerchandisers(res));
  },[]);
    
  const arrMerchandiser = merchandisers.map((eng, idx) => (
    <Card key={idx} engineer={eng}></Card>
  ));
  

    
  return <div id="engArray">{arrMerchandiser}</div>


}

export default MerchandisersContainer;