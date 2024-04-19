import React from "react";
import { Row, Col } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import instagram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin.svg";

export default function FooterCopyright() {
  const data = useStaticQuery(graphql`
    query FooterCopyright {
      logo: file(relativePath: { eq: "ads_logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 180
            layout: FIXED
            formats: [AUTO, WEBP, AVIF]
            placeholder: BLURRED
          )
        }
      }
    }
  `);

  return (
    <div className="bottom_footer">
      <Row>
        <div className="logo">
          <GatsbyImage
            image={data.logo.childImageSharp.gatsbyImageData}
            alt="Australian Debt Solvers"
            //style={{ overflow: "visible" }}
            className="img-responsive"
          />
        </div>
        <Col sm={8}>
          <p>
            {new Date().getFullYear()} Owned and managed by the Mackay Goodwin Group.
            <Link to="/privacy-policy"> Privacy Policy</Link>. Website by{" "}
            <a href="http://www.dimo.com.au">Dimo</a>
          </p>
        </Col>
        <Col sm={4}>
          <ul>
            <li>
              <a href="https://www.facebook.com/AustralianDebtSolvers/" rel="nofollow">
                <img src={facebook} alt="facebook" width="15" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/SolversDebt" rel="nofollow">
                <img src={twitter} alt="twitter" width="15" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/australiandebtsolvers/?hl=en" rel="nofollow">
                <img src={instagram} alt="instagram" width="15" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/australian-debt-solvers/about/"
                rel="nofollow"
              >
                <img src={linkedin} alt="linkedin" width="15" />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}
