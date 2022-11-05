import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container } from "react-bootstrap";

function Navigation() {
  return (
    <div className="pt-2">
      <Navbar className="lightblue" variant="light">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/websites">Websites</Nav.Link>
            <Nav.Link href="/tools">Tools</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="https://github.com/Igo-Cigo" target="_blank">GitHub</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
