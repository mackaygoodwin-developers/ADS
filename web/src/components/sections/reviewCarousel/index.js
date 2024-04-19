import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Carousel from "react-multi-carousel";
import StarRatings from "react-star-ratings";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import "react-multi-carousel/lib/styles.css";

import PortableText from "../../portableText";
import tab_trust from "../../../images/google_review_logo.png";
import "./reviewCarousel.scss";

function ReviewCarousel(props) {
  const data = useStaticQuery(graphql`
    query reviewCarouselQuery {
      googleReview1: file(relativePath: { eq: "google_review_logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 124
            layout: FIXED
            formats: [AUTO, WEBP, AVIF]
            placeholder: BLURRED
          )
        }
      }
    }
  `);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  function cutReview(str) {
    const length = 100;
    return str.length > length ? str.substring(0, length - 3) + "..." : str;
  }

  return (
    <section className={`care_testi ${props.grey ? "sectionOn" : ""}`}>
      <Container>
        <div className="care_testi_header">
          <h2>{props.heading}</h2>
          {props.localContent ? props.localContent : <PortableText blocks={props.content} />}
        </div>

        <div className="care_testi_content">
          <Row>
            <Col md={3} xs={12}>
              <div className="trust_piolot_img">
                <GatsbyImage
                  image={data.googleReview1.childImageSharp.gatsbyImageData}
                  alt="Google Review"
                  formats={["auto", "webp", "avif"]}
                  className="mx-auto d-block"
                />
                <p className="mt-2">Rated {props.googleRating} out of 5</p>
              </div>
            </Col>
            <Col md={9} xs={12}>
              <div className=" align-items-center">
                <Carousel
                  responsive={responsive}
                  showDots={false}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={5000}
                >
                  {props.reviews.map((review, index) => (
                    <div key={index}>
                      <Col>
                        <div className="trust_slide_top">
                          <StarRatings
                            name={review._key}
                            numberOfStars={5}
                            rating={review.rating}
                            starRatedColor="#f6a46a"
                            starDimension="20px"
                            starSpacing="2px"
                          />
                        </div>
                        <h3 className="custom_titel">{review.title}</h3>
                        <p className="custom_paregraf">{cutReview(review.review)}</p>
                        <span>{review.name}</span>
                      </Col>
                    </div>
                  ))}
                </Carousel>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default ReviewCarousel;
