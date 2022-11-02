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
  }, [merchandisers]);

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
          <Button  classN="btn btn-primary">Add Merchandiser</Button>
      <table
        className="table table-striped border1"
        style={{
          fontSize: "1rem",
          margin: "auto",
          backgroundColor: "#809BA6",
        }}
      >
        <thead className="table-dark">
          <tr>
            <th>Id:</th>
            <th>Username:</th>
            <th>Image:</th>
            <th>Email:</th>
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