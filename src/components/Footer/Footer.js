import React from "react";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid>
      <Row>
        <div className="footer py-5 mt-5 bg-dark d-flex flex-wrap justify-content-around">
          <div className="col-12 col-md-3 text-center">
            {/* Social Icons */}
            <div className="social-links mb-3">
              <h6 className="text-white ms-2">We are social</h6>
              <a
                rel="noopener noreferrer"
                href="https://facebook.com/babulakterfsd"
                target="_blank"
                className="text-success"
              >
                <i className="fab fa-facebook me-4"></i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://twitter.com/babulakterfsd"
                target="_blank"
                className="text-success"
              >
                <i className="fab fa-twitter me-4"></i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://youtube.com"
                target="_blank"
                className="text-success"
              >
                <i className="fab fa-youtube me-4"></i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://vimeo.com/"
                target="_blank"
                className="text-success"
              >
                <i className="fab fa-vimeo-v"></i>
              </a>
            </div>
          </div>
          {/* Footer text */}
          <div className="col-12 col-md-4 text-center mb-3">
            <div className="terms">
              <h6 className="text-white">
                Check out Website Terms And Conditions. Save Time, and Find it
                Here. Web, Images, Video. Information 24/7. Wiki, News , More
              </h6>
            </div>
          </div>
          {/* Copyright */}
          <div className="col-12 col-md-4 text-center">
            <div className="copyright">
              <h6 className="text-white mt-2">
                All rights reserved by BossBajar - 2022 &trade;
              </h6>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Footer;
