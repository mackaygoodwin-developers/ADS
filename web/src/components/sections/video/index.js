import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import VideoCont from "./VideoCont";
import VideoImage from "./VideoImage";
import "./video.scss";

function Video(props) {
  return (
    <section className={`approch ${props.grey ? "sectionOn" : ""}`}>
      <Container>
        <Row>
          <Col md={6}>
            <VideoCont data={props} />
          </Col>
          <Col md={6}>
            <VideoImage data={props} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Video;
