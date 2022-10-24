import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LoginForm() {
  return (
    <div className="Auth-form-container">
      <Container>
        <Row>
          <h2>Login</h2>
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
              className="form-control mt-1"
              placeholder="Enter email"
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
              
            </Form.Group>

            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default LoginForm;
