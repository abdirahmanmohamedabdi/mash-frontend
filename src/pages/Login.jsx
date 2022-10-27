import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [userType,setUserType] = useState('merch')
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    // const apiUrl = userType == 'manager' ? '/api/login/manager' : '/api/login/merchandiser'
    fetch("/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
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
          <h2>Login</h2>
          <Form className="Auth-form" onSubmit={handleSubmit}>
            <Form.Select>
              <option>Select Your role</option>
              <option value="1">Managers</option>
              <option value="2">Merchandisers</option>
            </Form.Select>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>

              <input
                type="email"
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

            <Button variant="dark" type="submit">
              {isLoading ? "Loading..." : "Login"}
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default LoginForm;
