import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar className="py-4 bg-success" expand="md">
        <Container fluid>
          <Navbar.Brand className="text-secondary fw-bolder">
            <Link
              to="/Shop"
              className="text-white text-decoration-none fw-bolder ms-lg-5"
            >
              BoosBajar
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-md-0 me-lg-5 fw-bold">
              <Link to="/Shop" className="text-decoration-none mx-2">
                <span className="text-white">Shop</span>
              </Link>
              <Link to="/OrderReview" className="text-decoration-none  mx-2">
                <span className="text-white">Orders</span>
              </Link>
              <Link to="/Inventory" className="text-decoration-none mx-lg-3">
                <span className="text-white">Inventory</span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
