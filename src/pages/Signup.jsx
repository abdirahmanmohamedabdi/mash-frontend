import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [phone_number, setPhone_Number] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const checkValidInputs = (email, password, password_confirmation,username,phone_number) => {
    //ensure no empty values submited to the db
    if (email !== "" && password !== "" && password_confirmation !== ""&& username !== ""&& phone_number !== "") {
      console.log("All inputs available");
      return true;
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    const Signup = {
      email: email,
      password: password,
      phone_number:phone_number,
      username: username,
      password_confirmation: password_confirmation,
    };
    if (checkValidInputs(email, password, password_confirmation),username,phone_number) {
      fetch(`http://127.0.0.1:3000/signup-${role}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Signup),
      })
        .then((res) => {
          if(res.status == 200){
            // phone_number

            alert('Successful signup')
            navigate('/login')
          }
          else{
            console.log(res)
            alert('Something went wrong')
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    else {
      alert('Check form inputs')
    }
  }
  return (
    <div className="Auth-form-container">
      <Container style={{marginLeft: "300px",width:"800px"}}>
        <Row>
          <h2 className="sign">Sign Up</h2>
          <Form className="Auth-form" onSubmit={handleSubmit}>
            <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
              <option>Select Your role</option>
              <option value="manager">
                Managers
              </option>
              <option value="merch">Merchandisers</option>
            </Form.Select>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>

              <input
                type="email"
                id="email"
                className="form-control mt-1"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>

              <input
                type="username"
                id="username"
                className="form-control mt-1"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>



            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>

              <input
                type="number"
                id="phone_number"
                className="form-control mt-1"
                placeholder="2547xxxxxxxxx"
                value={phone_number}
                onChange={(e) => setPhone_Number(e.target.value)}
              />
            </Form.Group>





            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>

              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password Confirmation</Form.Label>

              <input
                type="password"
                className="form-control mt-1"
                placeholder="Confirm Password"
                value={password_confirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </Form.Group>

            <Button className="signout" type="submit">
              Sign Up
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
