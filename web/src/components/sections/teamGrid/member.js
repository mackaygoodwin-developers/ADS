import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "gatsby";
import Image from "gatsby-plugin-sanity-image";

import "./team.scss";

function Member(props) {
  const illustration = props.image;
  return (
    <div>
      <Col>
        <div className="singal_team_member">
          <div className="img">
            <Image
              // pass asset, hotspot, and crop fields
              {...illustration}
              // tell Sanity how large to make the image (does not set any CSS)
              width={300}
              className="imgBanner"
              alt={illustration.alt}
            />
          </div>
          <h4>{props.name}</h4>
          <p>
            {props.role}
            <br />
            <span>{props.office}</span>
          </p>
          <Link to={`/meet-the-team/${props.slug.current}`}>
            View Profile <i className="fa fa-arrow-right"></i>
          </Link>
        </div>
      </Col>
    </div>
  );
}

export default Member;
