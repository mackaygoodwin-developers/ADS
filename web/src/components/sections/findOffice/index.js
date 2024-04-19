import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Container from "react-bootstrap/Container";

import "./findOffice.scss";

function FindOffice(props) {
  const data = useStaticQuery(graphql`
    query FindOfficeQuery {
      mapImg: file(relativePath: { eq: "map.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 450
            layout: FIXED
            formats: [AUTO, WEBP, AVIF]
            placeholder: BLURRED
          )
        }
      }
    }
  `);

  return (
    <section className={`findOffice ${props.grey ? "sectionOn" : ""}`}>
      <Container>
        <Row>
          <Col className="mapCol">
            <GatsbyImage
              image={data.mapImg.childImageSharp.gatsbyImageData}
              alt="Australaia"
              className="img-fluid"
              imgStyle={{ height: "auto" }}
            />
          </Col>
          <Col>
            <div className="find_titel">
              <h2>{props.heading}</h2>
              <p>{props.content}</p>
              <Row>
                <Col>
                  <ul className="office_saction list-unstyled card-columns">
                    {props.routes &&
                      props.routes.map((data, index) => (
                        <li key={index}>
                          <Link to={`/${data.slug.current}`}>{data.page.title}</Link>
                        </li>
                      ))}
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FindOffice;
