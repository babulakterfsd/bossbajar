import React from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { user, signInUsingGoogle } = useFirebase();
  return (
    <Container>
      <Row style={{ minHeight: "100vh" }}>
        <div className="col-12 col-md-10 col-lg-8 mx-auto">
          <Form className="shadow-sm px-2 py-4 p-sm-5 pt-2 my-5 text-secondary">
            <h2>Please, LogIn!</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter Your Email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <div className="d-flex justify-content-between align-items-center">
              <Button
                variant="success"
                type="submit"
                value="submit"
                className="px-3 py-2 fw-bold"
              >
                <i className="fas fa-user-plus me-1 text-warning"></i>
                SignIn
              </Button>
              <Link to="/register">Don't Have Account?</Link>
            </div>
            <hr />

            <h6 className="text-center">or</h6>

            <div className="button-container d-flex justify-content-around flex-wrap ">
              <Button
                onClick={signInUsingGoogle}
                className="btn-success fw-semi-bold  me-1 mb-3 mb-md-0"
              >
                <i className="fab fa-google me-2 text-warning"></i>
                SignIn with Google
              </Button>
              <Button className="btn-success fw-semi-bold  me-1 mb-3 mb-md-0">
                <i className="fab fa-facebook me-2 text-warning"></i>
                SignIn with Facebook
              </Button>
              <Button className="btn-success fw-semi-bold">
                <i className="fab fa-github me-2 text-warning"></i>
                SignIn with Github
              </Button>
            </div>
          </Form>
        </div>
      </Row>
    </Container>
  );
};

export default Login;
