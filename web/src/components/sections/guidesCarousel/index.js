import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Carousel from "react-multi-carousel";

import GuidePostPreview from "../../guides/guide-post-preview";
import "react-multi-carousel/lib/styles.css";
import "./guidesCarousel.scss";

function GuidesCarousel(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 762, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const guides = useStaticQuery(
    graphql`
      query allGuidesCarousel {
        allSanityGuide(sort: { fields: [publishedAt], order: DESC }) {
          edges {
            node {
              id
              publishedAt
              _rawMainImage(resolveReferences: { maxDepth: 10 })
              title
              _rawExcerpt
              slug {
                current
              }
              category {
                slug {
                  current
                }
                id
              }
            }
          }
        }
      }
    `
  );

  const catID = (props.category && props.category.id) || null;

  let filteredPosts = {};
  filteredPosts = guides.allSanityGuide.edges.filter(node => {
    if (catID) {
      if (node.node.category) {
        return node.node.category.id === catID;
      }
    } else {
      return (node.node = node.node);
    }
  });

  filteredPosts = [...filteredPosts.slice(0, 5)];

  return (
    <section className={`debt_section ${props.grey ? "sectionOn" : ""}`}>
      <Container>
        <div className="debt_section_heading">
          <h2>{props.heading}</h2>
          <p>{props.subHeading}</p>
        </div>

        <div className="reachers_slider">
          <Carousel
            responsive={responsive}
            showDots={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
          >
            {filteredPosts &&
              filteredPosts.map((node, index) => (
                <Col sm={12} md={6} lg={4} className="item" key={index}>
                  <GuidePostPreview {...node} />
                </Col>
              ))}
          </Carousel>
          {catID && (
            <div className="see_more">
              <Link to={`/${props.category.slug.current}/guides`}>
                View all {props.category.title} Resource Centre
              </Link>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export default GuidesCarousel;
