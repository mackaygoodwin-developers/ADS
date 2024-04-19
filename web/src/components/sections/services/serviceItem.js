import React from "react";
import { Link, navigate } from "gatsby";
import { getGatsbyImageData } from "gatsby-source-sanity";
import { GatsbyImage } from "gatsby-plugin-image";

import clientConfig from "../../../../client-config";

import imgarrow from "../../../images/link_arrow.png";
import "./services.scss";

const maybeImage = (illustration) => {
  let img = null;
  if (illustration && illustration.image && illustration.image.asset && !illustration.disabled) {
    const fixedProps = getGatsbyImageData(
      illustration.image.asset._id,
      { width: 50, quality: 80 },
      clientConfig.sanity
    );

    img = (
      <GatsbyImage
        image={fixedProps}
        alt={illustration.image.alt}
        formats={["auto", "webp", "avif"]}
      />
    );
  }
  return img;
};

function ServiceItem(props) {
  const [isPI,setPI] = React.useState(false);
  React.useEffect(() => {
    if(window.location.href.includes("personal-insolvency")){
      setPI(true);
    }
     return () => {
       setPI(false);
     }
  }, [])
  const data = props.data;

  const img = maybeImage(data.icon);

  let url = null;
  if (props.data.route) {
    const type = props.data.route._type;

    if (type === "route") {
      url = `/${props.data.route.slug.current}`;
    }

    if (type === "guide") {
      const category = props.data.route.category.slug.current;
      url = `/${category}/guides/${props.data.route.slug.current}`;
    }

    if (type === "post") {
      const category = props.data.route.category.slug.current;
      url = `/${category}/news/${props.data.route.slug.current}`;
    }
  }

  return (
    <div className="our_b_sub" onClick={() => (url ? navigate(url) : null)}>
      <div className="b_sub_img">{img}</div>
      <div>
        <h4>{data.heading}</h4>
        <p>{data.subText}</p>
      </div>
      {url && (
        <div className="b_sub_go">
          <Link to={url}>
            {isPI?<span>Learn more</span>:<img src={imgarrow} width="15" alt="arrow" />}
          </Link>
        </div>
      )}
    </div>
  );
}

export default ServiceItem;
//TODO: turn onclick to link
