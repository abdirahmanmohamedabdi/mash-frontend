import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../components/AuthProvider";

function Login() {
  const { onLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [role, setRole] = useState("manager");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkValidInputs = (email, password) => {
    //ensure no empty values submited to the db
    if (email !== "" || password !== "") {
      console.log("All inputs available");
      return true;
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    const Login = {
      email: email,
      password: password,
    };

    if (checkValidInputs(email, password)) {
      fetch(`http://127.0.0.1:3000/login-${role}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Login),
      })
      .then((res) => res.json())
      .then((res) => {
        if(res.token){
          alert('Successful Login')
          onLogin(res.token,res.role,res.user_id)
          if(res.role === 'merch'){
            navigate('/location')
          }else {
            navigate('/manager/merchandisers')
          }
        }
        else{
          alert('Access Denied')
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert()
      });
      
  }
  else {
    alert('Check form inputs')
  }

  }
  return (
    <div className="Auth-form-container">
      <Container  style={{marginLeft: "300px",width:"800px"}}>
        <Row>
          <Col lg={{span: 6, offset: 3}}>
          <h2 className="sign">Login</h2>
          <Form className="Auth-form" onSubmit={handleSubmit}>
            <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
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

            <Button className="signout" type="submit">
              Login
            </Button>
          </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
