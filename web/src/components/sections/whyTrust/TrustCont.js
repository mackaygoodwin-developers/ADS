import React from "react";
import PortableText from "../../portableText";

import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import "./whyTrust.scss";

function TrustCont(props) {
  const data = useStaticQuery(graphql`
    query whyTrustQuery {
      googleReview: file(relativePath: { eq: "google_review_logo.png" }) {
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
  return (
    <div className="y_trust_left">
      <h2>{props.data.heading}</h2>
      <div className="yt_cont"><PortableText blocks={props.data.content} /></div>
      <div className="y_trust_left_reat">
        <div className="y_trust_reat_sub">
          <GatsbyImage
            image={data.googleReview.childImageSharp.gatsbyImageData}
            alt="Google Review"
            formats={["auto", "webp", "avif"]}
          />
          <p>
            Rated <strong>{props.data.googleRating}</strong> Out of <strong>5</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TrustCont;
