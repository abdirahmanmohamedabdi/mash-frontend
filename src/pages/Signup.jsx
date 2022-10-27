import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";


function SignUpForm({onLogin}) {
 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("http://127.0.0.1:3000/signup", {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        
        email, 
        password,
        password_confirmation,
        
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    }  

  return (
    <div className="Auth-form-container">
      <Container>
        <Row>
          <h2>Sign Up</h2>
          <Form className="Auth-form">
            <Form.Select>
              <option>Select Your role</option>
              <option value="1">Managers</option>
              <option value="2">Merchandisers</option>
              
            </Form.Select>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
             
              <input
              type="email"
              id='email'
              className="form-control mt-1"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

            <Button  type="submit" onClick={handleSubmit}>
              Sign Up
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default SignUpForm;