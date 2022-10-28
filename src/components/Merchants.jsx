import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

const Merchants = ({ column }) => {
  const [merchants, setMerchants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/merchandisers")
      .then((response) => response.json())
      .then((data) => setMerchants(data));
  }, [merchants]);

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
          {merchants.map((merchant) => (
            <tr key={merchant.id}>
              <td>{merchant.id}</td>
              <td>{merchant.username}</td>
              <td><img src={merchant.image} style={imageStyle} alt="merchandiser" ></img></td>
              <td>{merchant.email}</td>
              <td>{merchant.location}</td>
              <td>
                <Button  classN="btn btn-primary">Edit</Button>
              </td>
              <td>
                <Button onClick={() => handleDelete(merchant.id)} classN="btn btn-danger"> Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Merchants;