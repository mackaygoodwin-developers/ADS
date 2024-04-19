import React from "react";
import Image from "gatsby-plugin-sanity-image";
import StarRatings from "react-star-ratings";

function ReviewItem(props) {
  const img = props.data.illustration.image;

  return (
    <div className="testi_current">
      <div className="testi_identy">
        <div className="teti_img">
          <Image
            // pass asset, hotspot, and crop fields
            {...img}
            // tell Sanity how large to make the image (does not set any CSS)
            width={100}
            alt={props.data.illustration.image.alt}
          />
        </div>
        <div className="t_name_rate">
          <p>{props.data.name}</p>
          <StarRatings
            name={props.data._key}
            numberOfStars={5}
            rating={props.data.rating}
            starRatedColor="#f6a46a"
            starDimension="20px"
            starSpacing="2px"
          />
        </div>
      </div>
      <div className="testi_desc">
        <p>{props.data.review}</p>
      </div>
    </div>
  );
}

export default ReviewItem;
//TODO: bugs on tablet VP
