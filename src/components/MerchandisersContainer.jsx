import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Card from "./MerchandiserCard";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MerchandisersContainer() {
  const apiUrl = "http://127.0.0.1:3000/merchandisers";
  const [merchandisers, setMerchandisers] = useState([]);
  const [modal,setModal] = useState(false)
  const [merch,setMerch] = useState({})

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      // .then(data => console.log(data))
      .then((res) => setMerchandisers(res));
  }, []);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          {merch.username}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          </p>
        </Modal.Body>
      </Modal>
    );
  }

  const showModal = (merch) => {
    setModal(true)
    setMerch(merch)
  };

  const arrMerchandiser = merchandisers.map((merch, idx) => (
    <tr key={idx}>
      <td>{merch.id}</td>
      <td>
        <img className="profile" src={merch.image} />{" "}
      </td>
      <td>{merch.username}</td>
      <td>{merch.phone_number}</td>
      <td>{merch.email}</td>
      <td>
        <Button onClick={() => showModal(merch)}>Show location</Button>
      </td>
      <td></td>
    </tr>
  ));

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Picture</th>
            <th>Username</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{arrMerchandiser}</tbody>
      </Table>
      <MyVerticallyCenteredModal
        show={modal}
        merchandiser={merch}
        onHide={() => setModal(false)}
      />
    </div>
  );
}

export default MerchandisersContainer;
