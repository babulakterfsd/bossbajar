import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar className="py-4 bg-success" expand="md">
        <Container fluid>
          <Navbar.Brand className="text-secondary fw-bolder">
            <Link
              to="/"
              className="text-white text-decoration-none fw-bolder ms-lg-5"
            >
              BossBajar
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-md-0 me-lg-5 fw-bold d-flex align-items-center">
              <Link to="/shop" className="text-decoration-none mx-2">
                <span className="text-white">Shop</span>
              </Link>
              <Link to="/orderReview" className="text-decoration-none  mx-2">
                <span className="text-white">Orders</span>
              </Link>
              <Link to="/inventory" className="text-decoration-none mx-lg-3">
                <span className="text-white">Inventory</span>
              </Link>
              <Link
                to="/login"
                className="text-decoration-none mx-lg-3 ms-lg-5"
              >
                <Button className="btn-warning fw-bold text-muted px-4">
                  Login
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
