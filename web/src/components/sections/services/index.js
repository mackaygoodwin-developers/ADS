import React from "react";
import ServiceItem from "./serviceItem";
import { Row, Col, Container } from "react-bootstrap";
import Image from "gatsby-plugin-sanity-image";
import PortableText from "../../portableText";

import "./services.scss";

function Services(props) {
  const illustration = props.background.image;
  const [spc,setSpc] = React.useState('');
  React.useEffect(() => {
    if(window.location.href.includes("director-penalty-notice")){
      setSpc('show_btn');
      console.log(props._key);
    }
     return () => {
       setSpc('');
     }
   }, [])
  return (
    <section className="business_services">
      <Image
        // pass asset, hotspot, and crop fields
        {...illustration}
        // tell Sanity how large to make the image (does not set any CSS)
        width={800}
        className="imgBanner"
        alt={illustration.alt}
      />
      <Container>
        <Row>
          <Col className="our_business_top">
            <h2>{props.heading}</h2>
            <PortableText blocks={props.content} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Row xs={1} md={3} lg={4} className="justify-content-md-center">
              {props.service &&
                props.service.map((data, index) => (
                  <Col key={index} className="mb-3">
                    <ServiceItem data={data} />
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className={`fc_btn ${spc}`}>
            <a href="/contact-us">Get a Free Consultation</a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;
