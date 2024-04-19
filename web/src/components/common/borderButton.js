import React from "react";
import { Link } from "gatsby";

function BorderButton(props) {
  if (props.data.route) {
    const type = props.data.route._type;

    if (type === "route") {
      return (
        <Link to={`/${props.data.route.slug.current}`} className="borderButton">
          {props.data.buttonText}
        </Link>
      );
    }

    if (type === "guide") {
      const category = props.data.route.category.slug.current;
      return (
        <Link to={`/${category}/guides/${props.data.route.slug.current}`} className="borderButton">
          {props.data.buttonText}
        </Link>
      );
    }

    if (type === "post") {
      const category = props.data.route.category.slug.current;
      return (
        <Link to={`/${category}/news/${props.data.route.slug.current}`} className="borderButton">
          {props.data.buttonText}
        </Link>
      );
    }

    return null;
  }
  return null;
}

export default BorderButton;
