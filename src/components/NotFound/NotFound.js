import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container>
      <Row>
        <div className="col-12 col-md-10 col-lg-8 mx-auto text-center">
          <div className="error-container" style={{ minHeight: "100vh" }}>
            <img
              src="https://raw.githubusercontent.com/babulakterfsd/imgsrc/main/404.png"
              alt="404"
              className="img-fluid notfoundimg"
            />
            <h1 className="text-danger m-0">404! Page Not Found !!</h1>
            <Link to="/home">
              <Button className="btn-success mb-5 mt-3 text-white">
                Go Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default NotFound;
