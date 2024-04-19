import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import TrustCont from "./TrustCont";
import Reviews from "./Reviews";
import "./whyTrust.scss";

function WhyTrust(props) {
  return (
    <section className={`y_trust ${props.grey ? "sectionOn" : ""}`} id="down_btn">
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <TrustCont data={props} />
          </Col>
          <Col md={12} lg={6}>
            <Reviews data={props.reviews} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhyTrust;
