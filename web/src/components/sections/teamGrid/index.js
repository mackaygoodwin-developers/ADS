import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "gatsby";

import PortableText from "../../portableText";
import Member from "./member.js";
import "./team.scss";

function Team(props) {
  return (
    <section className={`team_saction_mem ${props.grey ? "sectionOn" : ""}`}>
      <Container>
        <div className="meet_more_titel">
          <h2>{props.heading}</h2>
          <PortableText blocks={props.subHeading} />
        </div>
        <Row className="justify-content-md-center" lg={4} md={3} sm={2} xs={1}>
          {props.members &&
            props.members.map((data, index) => data.slug && <Member key={index} {...data} />)}
        </Row>
        {!props.button && (
          <div className="lod_more_but">
            <Link to="/about/meet-the-team">View all team members</Link>
          </div>
        )}
      </Container>
    </section>
  );
}

export default Team;
