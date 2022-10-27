import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


 const checkValidInputs = (email, password) => {
  //ensure no empty values submited to the db
  if (email !== "" && password !== "" ){
    console.log("All inputs available")
    return true;
  }
}



 function handleSubmit(e) {
   e.preventDefault();

   const Login = {
    email: email,
    password: password,
   
  }

  const isValid = checkValidInputs(email, password);

  if (!isValid) {
  console.log("Login");
  return;
  }

  
   fetch("http://127.0.0.1:3000/login", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(Login)
   })
   .then((res) => {console.log(res.data);
     navigate("/")
   })
   .catch((error) => {
     console.error("Error:", error);
   });

   setEmail("")
   setPassword("")
 }
  return (
    <div className="Auth-form-container">
      <Container>
        <Row>
          <h2>Login</h2>
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

            <Button variant="dark" type="submit">
              Login
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
