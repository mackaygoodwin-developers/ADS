import React from "react";
import { Row, Col } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function PartnershipLogos() {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      RegisteredAgent: file(relativePath: { eq: "registered_agent.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 80
            layout: FIXED
            formats: [AUTO, WEBP, AVIF]
            placeholder: BLURRED
          )
        }
      }
      Arita: file(relativePath: { eq: "arita-members.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 80
            layout: FIXED
            formats: [AUTO, WEBP, AVIF]
            placeholder: BLURRED
          )
        }
      }
      MackayGoodwin: file(relativePath: { eq: "Mackay-Goodwin-logo-v.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 80
            layout: FIXED
            formats: [AUTO, WEBP, AVIF]
            placeholder: BLURRED
          )
        }
      }
      SimplyFunds: file(relativePath: { eq: "simply-funds-logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 40
            layout: FIXED
            formats: [AUTO, WEBP, AVIF]
            placeholder: BLURRED
          )
        }
      }
    }
  `);

  return (
    <div className="footer_top">
      <Row>
        <Col md={12} lg={2} className="pt-4">
          <h2>Certifications & Partnerships</h2>
        </Col>
        <Col md={12} lg={10}>
          <Row className="justify-content-md-center">
            <Col sm={12} md="auto">
              <GatsbyImage
                image={data.RegisteredAgent.childImageSharp.gatsbyImageData}
                alt="Registered Agent"
                style={{ overflow: "visible" }}
                className="img-fluid mx-auto d-block"
                formats={["auto", "webp", "avif"]}
              />
            </Col>
            <Col sm={12} md="auto">
              <GatsbyImage
                image={data.Arita.childImageSharp.gatsbyImageData}
                alt="Arita Members"
                style={{ overflow: "visible" }}
                className="img-fluid mx-auto d-block"
                formats={["auto", "webp", "avif"]}
              />
            </Col>
            <Col sm={12} md="auto">
              <a href="https://www.mackaygoodwin.com.au/">
                <GatsbyImage
                  image={data.MackayGoodwin.childImageSharp.gatsbyImageData}
                  alt="Mackay Goodwin"
                  style={{ overflow: "visible" }}
                  className="img-fluid mx-auto d-block"
                  formats={["auto", "webp", "avif"]}
                />
              </a>
            </Col>
            <Col sm={12} md="auto" className="pt-4">
              <a href="https://simplyfunds.com.au/">
                <GatsbyImage
                  image={data.SimplyFunds.childImageSharp.gatsbyImageData}
                  alt="Simply Funds"
                  style={{ overflow: "visible" }}
                  className="img-fluid mx-auto d-block"
                  formats={["auto", "webp", "avif"]}
                />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
//TODO: Heading h4 needs to be centred. not lined up right on Grey to black
