import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { AuthContext } from "./AuthProvider";


function Navigation() {
  const { token, onLogout } = React.useContext(AuthContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Mash-Industries</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {!token && <Nav.Link href="/signup">Sign Up</Nav.Link>}
             
            {!token && <Nav.Link href="/login">Log In {token}</Nav.Link>}
            {token && (
              <button type="button" onClick={onLogout}>
                Sign out
              </button>
            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
