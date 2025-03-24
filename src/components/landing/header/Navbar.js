import "./navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbars = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="mainheadernav">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand className="navofftop" href="#home"><img src="\assets\Group 10.svg" alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home </Nav.Link>
                <Nav.Link href="#feature">Features</Nav.Link>
                <Nav.Link href="#package">Packages</Nav.Link>
                <Nav.Link href="#Blogs">Blogs</Nav.Link>


              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>



    </>
  );
};

export default Navbars;
