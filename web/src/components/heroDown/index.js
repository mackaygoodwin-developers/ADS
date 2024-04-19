import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { little_down_btn } from "./styles.module.scss";

const HeroDown = () => {
  return (
    <StaticQuery
      query={query}
      render={(data) => (
        <div className={little_down_btn}>
          <GatsbyImage
            image={data.file.childImageSharp.gatsbyImageData}
            alt="down"
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
          />
        </div>
      )}
    />
  );
};

export default HeroDown;

export const query = graphql`
  {
    file(relativePath: { eq: "down_btn.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 68
          layout: FIXED
          formats: [AUTO, WEBP, AVIF]
          placeholder: BLURRED
        )
      }
    }
  }
`;
