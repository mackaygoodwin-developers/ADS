import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import { getGatsbyImageData } from "gatsby-source-sanity";
import { GatsbyImage } from "gatsby-plugin-image";

import clientConfig from "../../../client-config";
import SEO from "../seo";
import Team from "../sections/team";
import Form from "../../components/forms/form";
import GuidePostPreview from "../guides/guide-post-preview";
import PortableText from "../portableText";
import "./team-page.scss";

function TeamPage(props) {
  const headTxt = {
    formHeading: "Write your Message",
  };

  const data = useStaticQuery(graphql`
    query TeamPageQuery {
      allTeam: allSanityAuthor {
        nodes {
          slug {
            current
          }
          id
          name
          role
          office
          _rawImage(resolveReferences: { maxDepth: 10 })
        }
      }
    }
  `);

  const maybeImage = (illustration) => {
    let img = null;
    if (illustration && illustration.asset && !illustration.disabled) {
      const fixedProps = getGatsbyImageData(
        illustration.asset._id,
        { width: 250, height: 250, quality: 80 },
        clientConfig.sanity
      );

      img = <GatsbyImage className="profile" image={fixedProps} alt={illustration.alt} />;
    }
    return img;
  };

  //build breadcrumbs
  const breadcrumbs = [
    {
      page: { title: "Meet the Team" },
      slug: { current: "meet-the-team" },
    },
    {
      page: { title: `${props.name}` },
      slug: { current: `meet-the-team/${props.slug.current}` },
    },
  ];
  const profileImg = maybeImage(props._rawImage);

  return (
    <>
      <Container as="main">
        <SEO {...props.seo} breadcrumb={breadcrumbs} />

        <Row className="about_singal_bio">
          <Col md={6}>
            <div className="dp_saction sticky-top" id="sidebar">
              {profileImg}
              <h1>{props.name}</h1>
              <p>
                {props.role} <br />
                <span>{props.office}</span>
              </p>
              <ul className="social">
                {props.twitter && (
                  <li>
                    <a href={props.twitter} rel="nofollow">
                      <i className="fa fa-twitter"></i> Twitter{" "}
                    </a>
                  </li>
                )}
                {props.linkedin && (
                  <li>
                    <a href={props.linkedin} rel="nofollow">
                      <i className="fa fa-linkedin"></i> Linkedin
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </Col>
          <Col md={6}>
            <div className="all_biografy">
              <div className="about_domenic">
                <PortableText className="about_domenic" blocks={props._rawBody} />

                <h2 id="form">Send a message to {props.name}</h2>
                <p>
                  Getting in touch with us is the first step to getting things under control again.
                </p>
                <Form data={headTxt} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
 
      <aside className="sectionOn">
        <Container className="team_saction_mem sectionOn">
          <div className="meet_more_titel">
            <h3>{props.name} Latest Articles</h3>
            <p>Visit our blog section to read more about ....</p>
          </div>

          <Row>
            {props.authorGuides &&
              props.authorGuides.edges.map((node, index) => (
                <Col sm={12} md={6} lg={4} key={index}>
                  <GuidePostPreview {...node} />
                </Col>
              ))}
          </Row>
        </Container>
      </aside>
      <Team
        members={data.allTeam.nodes}
        heading="Meet More Team Members"
        //subHeading="See more team members here..."
        grey={false}
      />
    </>
  );
}

export default TeamPage;
