import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "gatsby";

import PortableText from "../../portableText";
import "./video.scss";

function VideoCont(props) {
  const data = props.data;

  return (
    <div className="approh_left">
      <h2>{data.heading}</h2>
      <PortableText blocks={data.content} />
      <Row className="approch_left_btn">
        {/*     <Col md={12} lg={6} xl={5}>
          <Link className="approch_learn" to="/liquidation">
            Learn more
          </Link>
        </Col> */}
        <Col sm={6} md={10} lg={7}>
          {/*  if set in cms then use else default to cta */}
          <Link
            className="free_consult"
            to={data.route ? `/${data.route.slug.current}` : `/${data.ctaRoute.slug.current}`}
          >
            {data.buttonText ? data.buttonText : "Get a Free Consultation"}
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default VideoCont;
//TODO: Update links to set settings
