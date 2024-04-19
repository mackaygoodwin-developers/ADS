import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import PortableText from "../../portableText";
import "./textOnly.scss";

function TextOnly(props) {
  return (
    <section className={`textOnly ${props.grey ? "sectionOn" : ""}`} id="down_btn">
      <Container>
        <Row>
          <Col sm={12}>
            <h2>{props.heading}</h2>
            {props.content && <PortableText blocks={props.content} />}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TextOnly;
