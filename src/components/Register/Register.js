import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container>
      <Row style={{ minHeight: "100vh" }}>
        <div className="col-12 col-md-10 col-lg-8 mx-auto">
          <Form className="shadow-sm p-5 pt-2 mt-5 text-secondary">
            <h2> Please, Register!</h2>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Enter Your Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Your Email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridBio">
              <Form.Label>About Yourself</Form.Label>
              <Form.Control placeholder="I am ...." />
            </Form.Group>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Subscribe to our newsletter" />
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Button
                variant="success"
                type="submit"
                value="submit"
                className="px-3 py-2 fw-bold"
              >
                <i className="fas fa-user-plus me-1 text-warning"></i>
                SignUp
              </Button>
              <Link to="/login">Already Registered?</Link>
            </div>
          </Form>
        </div>
      </Row>
    </Container>
  );
};

export default Register;
