import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "gatsby";
import Image from "gatsby-plugin-sanity-image";

import HeroDown from "../../heroDown";
import homeicon from "../../../../static/home_breadcrumb.png";
import "./simpleHero.scss";

function SimpleHero(props) {
  let isBlank = props.isBlank || false;
  const illustration = props.illustration.image;
  const heading = props.heading || null;
  const breadcrumbs = props.breadcrumbs || [];
  const subHeading = props.subHeading || null;
  const route = props.route || { slug: { current: "/" } };
  const downIcon = props.downIcon || null;

  let heathCheck = props.healthCheck || false;
  let healthCheckLogin = props.healthCheckLogin || false;

  // don't show other buttons if login is selected
  if (healthCheckLogin) {
    heathCheck = false;
    isBlank = true;
  }

  return (
    <section className={`simpleHero  ${isBlank === true ? "setBlankHeight" : ""}`}>
      <Image
        // pass asset, hotspot, and crop fields
        {...illustration}
        // tell Sanity how large to make the image (does not set any CSS)
        width={800}
        className="imgBanner"
        alt={illustration.alt}
      />
      <Container>
        {breadcrumbs.length > 0 && (
          <div className="bred">
            <ul>
              <li>
                <Link to="/">
                  <img src={homeicon} alt="Home" />
                </Link>
              </li>
              {breadcrumbs.map((data, index) => (
                <li key={index}>
                  {data.slug && <Link to={`/${data.slug.current}`}>{data.page.title}</Link>}
                </li>
              ))}
            </ul>
          </div>
        )}

        {heading && <h1>{heading}</h1>}
        {subHeading && <p>{subHeading}</p>}

        {!isBlank && (
          <Link className="btnRed" to={`/${route.slug.current}`}>
            Get a Free Consultation
          </Link>
        )}

        {/*heathCheck === true && (
          <Link className="btnGreen" to="/business-health-check">
            Free Business Health Check {props.healthCheck}
          </Link>
        )*/}

        {healthCheckLogin === true && (
          <div>
            <Link
              className="btnRed"
              to="https://australiandebtsolvers.ava-systems.com/login?ref=D3MFA"
            >
              Business Advisors
            </Link>

            <Link className="btnGreen" to="https://australiandebtsolvers.ava-systems.com/login">
              Directors
            </Link>
          </div>
        )}
      </Container>
      {downIcon === true && <HeroDown />}
    </section>
  );
}

export default SimpleHero;
