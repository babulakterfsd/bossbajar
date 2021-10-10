import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div>
      <Navbar className="py-4 bg-success" expand="md">
        <Container fluid>
          <Navbar.Brand className="text-secondary fw-bolder">
            <Link
              to="/"
              className="text-white text-decoration-none fw-bolder ms-md-5"
            >
              BossBajar
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-md-0 me-lg-5 fw-semi-bold d-flex align-items-center">
              <Link
                to="/shop"
                className="text-decoration-none mx-2 mb-2 mb-md-0"
              >
                <span className="text-white">Shop</span>
              </Link>
              <Link
                to="/orderReview"
                className="text-decoration-none  mx-2 mb-2 mb-md-0"
              >
                <span className="text-white">Orders</span>
              </Link>
              <Link
                to="/inventory"
                className="text-decoration-none mx-md-3 mb-2 mb-md-0"
              >
                <span className="text-white">Inventory</span>
              </Link>
              <div className="user-state-in-header ms-md-5">
                {user?.email || user?.displayName ? (
                  <div className="loggedin">
                    <img
                      src={user?.photoURL}
                      alt="userimg"
                      style={{
                        height: "40px",
                        width: "40px",
                        borderRadius: "100%",
                        marginRight: "4px",
                      }}
                    />
                    <span className="text-white fw-bold mx-md-2 me-2">
                      {user?.displayName}
                    </span>
                    <Link to="/shop" className="text-decoration-none">
                      <Button
                        onClick={logOut}
                        className="btn-warning fw-bold text-muted ms-md-4 px-4"
                      >
                        LogOut
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <Link to="/login" className="text-decoration-none ms-md-5">
                    <Button className="btn-warning fw-bold text-muted px-4">
                      LogIn
                    </Button>
                  </Link>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
