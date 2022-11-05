import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container } from "react-bootstrap";

function Navigation() {
  return (
    <div className="pt-2">
      <Navbar className="navbar" variant="light">
        <Container>
          <div className="px-3 py-2">
            <div className="brand">
              <Navbar.Brand href="/">
                <img src="/svg/house.svg" className="w-100 px-1" alt="home" />
              </Navbar.Brand>
            </div>
          </div>
          <Nav className="me-auto">
            <Nav.Link href="/websites">
              <img src="/svg/braces.svg" className="w-100" alt="websites" />
            </Nav.Link>
            <Nav.Link href="/tools">
              <img src="/svg/box-seam.svg" className="w-100" alt="tools" />
            </Nav.Link>
            <Nav.Link href="/contact">
              <img
                src="/svg/person-lines-fill.svg"
                className="w-100"
                alt="contact"
              />
            </Nav.Link>
            <Nav.Link href="https://github.com/Igo-Cigo" target="_blank">
              <img src="/svg/github.svg" className="w-100" alt="github" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
