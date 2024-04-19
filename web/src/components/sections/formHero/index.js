import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Image from "gatsby-plugin-sanity-image";
import { Link } from "gatsby";

import Form from "../../forms/form";
import homeicon from "../../../../static/home_breadcrumb.png";
import "./formHero.scss";

function FormHero(props) {
  const illustration = props.illustration.image;
  return (
    <section className="formHero">
      <Image
        // pass asset, hotspot, and crop fields
        {...illustration}
        // tell Sanity how large to make the image (does not set any CSS)
        width={800}
        className="imgBanner"
        alt={illustration.alt}
      />
      <Container>
        {props.breadcrumbs.length > 0 && (
          <div className="bred">
            <ul>
              <li>
                <Link to="/">
                  <img src={homeicon} alt="Home" />
                </Link>
              </li>
              {props.breadcrumbs.map((data, index) => (
                <li key={index}>
                  {data.slug && <Link to={`/${data.slug.current}`}>{data.page.title}</Link>}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Row className="slider_text" id={`${props._key == '417738b3e8b1' ? "dpn_banner" : ""}`}>
          <Col sm={12} md={6} lg={7}>
            <div className="slider_contant inner_slider">
              <h1>{props.heading}</h1>
              <p>{props.subHeading}</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={5}>
            <Form data={props} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FormHero;
