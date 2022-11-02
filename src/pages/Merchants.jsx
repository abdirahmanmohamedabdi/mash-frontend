import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

const Merchants = ({ column }) => {
  const [merchandisers, setMerchandisers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/merchandisers")
      .then((response) => response.json())
      .then((data) => setMerchandisers(data));
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:3000/merchandisers/${id}`, {
      method: "DELETE",
    });
  }


  const imageStyle ={
height: "100px",
width:"100px",
borderRadius:"50%"

  }

  return (
    <div className={`${column}`}>
    <Button  classN="btn btn-primary"  style={{backgroundColor: "",marginTop: "40px",marginLeft:"1200px"}}>Add Merchandiser</Button>
          
      <table
        className="table table-striped border1"
        style={{
          fontSize: "1rem",
          width:"1300px",
          marginLeft: "80px",
          marginTop: "20px",
          backgroundColor: "rgb(247, 236, 222)",
        }}
      >
      
        <thead className="table-dark">
          <tr>
            <th>Id:</th>
            <th>Username:</th>
            <th>Image:</th>
            <th>Email:</th>
            <th>Contact:</th>
            <th>Location:</th>
          </tr>
        </thead>
        <tbody>
          {merchandisers.map((merchandiser) => (
            <tr key={merchandiser.id}>
              <td>{merchandiser.id}</td>
              <td>{merchandiser.username}</td>
              <td><img src={merchandiser.image} style={imageStyle} alt="merchandiser" ></img></td>
              <td>{merchandiser.email}</td>
              <td>{merchandiser.contact}</td>
              <td>{merchandiser.location}</td>
              <td>
                <Button  classN="btn btn-primary">Edit</Button>
              </td>
              <td>
                <Button onClick={() => handleDelete(merchandiser.id)} classN="btn btn-danger"> Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Merchants;