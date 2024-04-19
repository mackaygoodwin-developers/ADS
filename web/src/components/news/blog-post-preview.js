import { Link, navigate } from "gatsby";
import React from "react";
import Image from "gatsby-plugin-sanity-image";

import { getBlogUrl } from "../../lib/helpers";
import PortableText from "../portableText";
import "./newsFeed.scss";
import imgarrow from "../../images/link_arrow.png";

function BlogPostPreview(props) {
  const { category, slug, _rawMainImage, title, _rawExcerpt } = props.node;
  const illustration = _rawMainImage.image;

  return (
    <div className="post" onClick={() => navigate(getBlogUrl(category.slug.current, slug.current))}>
      {_rawMainImage.image && _rawMainImage.image.asset && (
        <div className="img-fluid newsImgPrev">
          <Image
            // pass asset, hotspot, and crop fields
            {...illustration}
            // tell Sanity how large to make the image (does not set any CSS)
            width={370}
            className="imgBanner"
            alt={illustration.alt}
          />
        </div>
      )}
      <div className="letest_news_text">
        <Link to={getBlogUrl(category.slug.current, slug.current)}>
          <h4>{title}</h4>
          {_rawExcerpt && <PortableText blocks={_rawExcerpt} />}
          {/* <div>{format(props.publishedAt, "MMMM Do, YYYY")}</div> */}
        </Link>
        {/* removed due to accessibility issues in lighthouse */}
        {/*   <Link to={getBlogUrl(category.slug.current, slug.current)}>
          Read More
          <img src={imgarrow} alt="arrow" />
        </Link> */}
      </div>
    </div>
  );
}

export default BlogPostPreview;
