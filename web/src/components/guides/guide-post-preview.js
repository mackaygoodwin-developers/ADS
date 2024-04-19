import { Link } from "gatsby";
import React from "react";
import Image from "gatsby-plugin-sanity-image";

import { getGuideUrl } from "../../lib/helpers";
import PortableText from "../portableText";

function BlogPostPreview(props) {
  const { category, slug, _rawMainImage, title, _rawExcerpt } = props.node;
  const illustration = _rawMainImage.image;
  return (
    <div className="singel_research">
      <Image
        // pass asset, hotspot, and crop fields
        {...illustration}
        // tell Sanity how large to make the image (does not set any CSS)
        width={350}
        className="imgBanner"
        alt={illustration.alt}
      />
      <Link to={getGuideUrl(category.slug.current, slug.current)}>
        <div className="research_text">
          <h3>{title}</h3>
          {_rawExcerpt && <PortableText blocks={_rawExcerpt} />}
        </div>
      </Link>
    </div>
  );
}

export default BlogPostPreview;
