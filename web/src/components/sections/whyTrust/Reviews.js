import React from "react";
import ReviewItem from "./ReviewItem";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

function Reviews(props) {
  return (
    <div className="y_trust_right">
      <div className="y_trust_tab">
        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
        >
          {props.data &&
            props.data.map((review, index) => <ReviewItem key={index} data={review} />)}
        </Carousel>
      </div>
    </div>
  );
}

export default Reviews;
