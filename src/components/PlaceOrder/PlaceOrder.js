import React from "react";
import { Container, Row } from "react-bootstrap";
import animatedImage from "../../images/giphy.gif";

const PlaceOrder = () => {
  return (
    <Container>
      <Row style={{ minHeight: "100vh" }}>
        <div className="col-12 col-md-8 col-lg-6 mx-auto">
          <img
            src={animatedImage}
            alt="giphy"
            className="img-fluid d-block mx-auto mt-5"
          />
          <h3 className="text-secondary">
            Thanks for buying. Hope to see you again.
          </h3>
        </div>
      </Row>
    </Container>
  );
};

export default PlaceOrder;
