import React from "react";
import { Row, Col } from "react-bootstrap";

import "./mapLocation.scss";

function MapLocation(props) {
  return (
    <section className={`contact_map ${props.grey ? "sectionOn" : ""}`}>
      <Row className="align-items-center">
        <Col md={6}>
          <iframe
            title="Google Map"
            frameBorder="0"
            width="100%"
            height="450"
            src={props.googleMapUrl}
          ></iframe>
        </Col>
        <Col md={6}>
          <div className="off_add">
            <h2>{props.heading}</h2>
            <p>{props.content}</p>
            <ul>
              <li>{props.address}</li>
              <li>
                Call now: <b>{props.phoneNumber}</b>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default MapLocation;
