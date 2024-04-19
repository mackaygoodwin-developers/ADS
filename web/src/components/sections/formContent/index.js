import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import Form from "../../forms/form";
import PortableText from "../../portableText";
import "./formContent.scss";

function FormContent(props) {
  const headTxt = {
    formHeading: "Send a Direct Message"
  };
  return (
    <section className={`contact_free ${props.grey ? "sectionOn" : ""}`}>
      <Container>
        <Row>
          <Col md={6}>
            <div className="approh_left">
              <h2>{props.heading}</h2>
              <PortableText blocks={props.content} />
            </div>
          </Col>
          <Col md={6}>
            <Form data={headTxt} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FormContent;
