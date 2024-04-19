import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "gatsby-plugin-sanity-image";
import PortableText from "../../portableText";
import BorderButton from "../../common/borderButton";
import "./tileImageContent.scss";
import PhoneIcon from "../../../../static/images/Icon.svg";
function TileImageContent(props) {

console.log(props);
  const illustration = props.background.image;

  return (
    <section className={`tileImageContent ${props.grey ? "sectionOn" : ""} ${props._key == 'a1b5b8969479'?"years_sec":""}`} id="down_btn">
      <Row className={`no-gutters ${props.layout === "left" ? "" : "flex-row-reverse"}`}>
        <Col sm={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }}>
          <div className="tileBG">
            <Image
              // pass asset, hotspot, and crop fields
              {...illustration}
              // tell Sanity how large to make the image (does not set any CSS)
              width={600}
              className="imgBanner"
              alt={illustration.alt}
            />
          </div>
        </Col>
        <Col
          sm={{ span: 12, order: 2 }}
          md={{ span: 6, order: 2 }}
          className={`content ${props.layout === "left" ? "" : "left"}`}
        >
          <h2>{props.heading}</h2>
          {props.content && <PortableText blocks={props.content} />}
          {props._key == 'a1b5b8969479' ? 
            <div className="tel_num">
             
              <a href={`tel:1300 701 193`}>
                <img src={PhoneIcon} alt="Phone" />
                <span className="callNow">Call now</span> <span>1300 701 193</span>
              </a>
           
          </div>
           : null
         }
         
          {props.borderButton && <BorderButton data={props.borderButton} />}
          {props._key == '93d69933b074' ? 
          <a class="borderButton" href="#dpn_banner">Enquire now</a>
           : null
         }
         {props._key == '7c2f0d80deb1' ? 
          <a class="borderButton" href="#dpn_banner">Enquire now</a>
           : null
         }
         
        </Col>
      </Row>
    </section>
  );
}

export default TileImageContent;
