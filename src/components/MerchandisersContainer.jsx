import React, { useState, useEffect } from "react";

import MerchandiserCard from "./MerchandiserCard";


function MerchandisersContainer(){
    const[merchandisers, setMerchandisers] = useState([]);

  useEffect(() => {
    fetch("/merchandisers")
    .then((r) => r.json())
    .then(setMerchandisers);
  }, []); 

    const merchandiserCards = merchandisers.map((merchandiser) => (
        <MerchandiserCard
        key={merchandiser.id}
        merchandiser={merchandiser}
        />
    ));

    return <div style={stylingContainer}>{merchandiserCards}</div>
}

var stylingContainer = {
    padding: "2px 16px",
    width: "stretch",
    height: "auto",
    background: ""
}

export default MerchandisersContainer;