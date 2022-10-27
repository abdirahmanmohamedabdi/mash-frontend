import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Container, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";


function Signup() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password_confirmation, setPasswordConfirmation] = useState("")


 const checkValidInputs = (email, password, password_confirmation) => {
  //ensure no empty values submited to the db
  if (email !== "" && password !== "" && password_confirmation !== ""){
    console.log("All inputs available")
    return true;
  }
}



 function handleSubmit(e) {
   e.preventDefault();

   const Signup = {
    email: email,
    password: password,
    password_confirmation: password_confirmation
   
  }

  const isValid = checkValidInputs(email, password, password_confirmation);

  if (!isValid) {
  console.log("Signup");
  return;
  }

  
   fetch("http://127.0.0.1:3000/signup", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(Signup)
   })
   .then((res) => {console.log(res.data);
     navigate("/login")
   })
   .catch((error) => {
     console.error("Error:", error);
   });

   setEmail("")
   setPassword("")
   setPasswordConfirmation("")
 }
  return (
    <div className="Auth-form-container">
      <Container>
        <Row>
          <h2>Sign Up</h2>
          <Form className="Auth-form" onClick={handleSubmit}>
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
              onChange={(e) => setEmail(e.target.value)} />
            
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

            <Button variant="dark" type="submit">
              Sign Up
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;