import React from "react";
import { Col } from "react-bootstrap";
import Image from "gatsby-plugin-sanity-image";
import "./featureIcons.scss";

function IconItem(props) {
  const icon = props.data;
  const img = icon.icon.image;
  return (
    <Col className="usps m-2 mx-auto" xs={5} sm={4} md={2} xl={2}>
      <div className="item_inner">
      <div className="usps_img">
        <Image
          // pass asset, hotspot, and crop fields
          {...img}
          // tell Sanity how large to make the image (does not set any CSS)
          width={60}
          alt={img.alt}
        />
      </div>
      <div className="usps_text">
        <h4>{icon.heading}</h4>
        {icon.subText && <p>{icon.subText}</p>}
      </div>
      </div>
    </Col>
  );
}

export default IconItem;
