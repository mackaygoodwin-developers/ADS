import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { Link } from "gatsby";

import PortableText from "../../portableText";
import Member from "./member.js";
import "./team.scss";

function Team(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <section className={`team_saction_mem ${props.grey ? "sectionOn" : ""}`}>
      <Container>
        <div className="meet_more_titel">
          <h2>{props.heading}</h2>
          <PortableText blocks={props.subHeading} />
        </div>

        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={5000}
        >
          {props.members && props.members.map((data, index) => <Member key={index} {...data} />)}
        </Carousel>
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
