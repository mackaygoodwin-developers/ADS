import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

function SiteLogo() {
  return (
    <div className="logo">
      <Link to="/">
        {/*    <Img
          fixed={data.logo.childImageSharp.fixed}
          alt="Australian Debt Solvers"
          //style={{ overflow: "visible" }}
          className="fixed_header_logo"
          fadeIn={false}
          loading="eager"
        /> */}
        <StaticImage
          src="../../images/ads_logo.png"
          alt="Australian Debt Solvers"
          layout="fixed"
          width={170}
          loading="eager"
          formats={["auto", "webp", "avif"]}
          backgroundColor="#fff"
          placeholder="blurred"
        />
      </Link>
    </div>
  );
}

export default SiteLogo;
