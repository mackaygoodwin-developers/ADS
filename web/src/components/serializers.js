import React from "react";
import MainImage from "./MainImage";
import ReactPlayer from "react-player/youtube";
import slugify from 'react-slugify';
import LatexRenderer from "./Latex";
import BasePortableText from "@sanity/block-content-to-react";

const AuthorReference = ({ node }) => {
  if (node && node.author && node.author.name) {
    return <span>{node.author.name}</span>;
  }
  return <></>;
};

const headScroll = props => {
  if (props.node.style === "h2") {
    return React.createElement(
      "h2",
      { id: `${slugify(props.children)}`, className: `anchor` },
      props.children
    );
  }
  return BasePortableText.defaultSerializers.types.block(props);
};

const serializers = {
  types: {
    block: headScroll,
    authorReference: AuthorReference,
    mainImage: ({ node }) => <MainImage mainImage={node} />,
    videoEmbed: ({ node }) => (
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          width="100%"
          height="100%"
          light
          url={node.url}
          controls
        />
      </div>
    ),
    math: ({ node, isInline = false }) => <LatexRenderer isInline={isInline} latex={node.latex} />
  }
};

export default serializers;
