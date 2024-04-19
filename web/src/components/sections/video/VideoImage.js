import React, { useState } from "react";
import { getGatsbyImageData } from "gatsby-source-sanity";
import { GatsbyImage } from "gatsby-plugin-image";

import clientConfig from "../../../../client-config";

import bnplay from "./playIcon.png";
import FsLightbox from "fslightbox-react";
import "./video.scss";

const maybeImage = (illustration, width) => {
  let img = null;
  if (illustration && illustration.image && illustration.image.asset && !illustration.disabled) {
    const fixedProps = getGatsbyImageData(
      illustration.image.asset._id,
      { width, quality: 80 },
      clientConfig.sanity
    );

    img = (
      <GatsbyImage
        className="img-fluid"
        image={fixedProps}
        alt={illustration.image.alt}
        formats={["auto", "webp", "avif"]}
      />
    );
  }
  return img;
};

function VideoImage(props) {
  const data = props.data;
  const [toggler, setToggler] = useState(false);
  const backImg = maybeImage(data.backImage, 400);
  const frontImg = maybeImage(data.frontImage, 300);

  return (
    <div className="approch_right">
      <FsLightbox toggler={toggler} sources={[data.youtubeURL]} />

      <div className="apr_back_img img-fluid">{backImg}</div>
      <div className="apr_front_img img-fluid">
        {frontImg}
        <img src={bnplay} alt="video" onClick={() => setToggler(!toggler)} />
      </div>
    </div>
  );
}

export default VideoImage;
//Todo: Gatsby Image Play Icon
