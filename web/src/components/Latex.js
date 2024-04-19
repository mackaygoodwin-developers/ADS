import React, { useState, useMemo } from "react";
import { renderToString } from "katex";
//import "katex/dist/katex.min.css";

const LatexRender = ({ isInline = false, latex = "" }) => {
  const [html, setHtml] = useState("");
  const createHtml = () => {
    setHtml(
      renderToString(latex, {
        displayMode: !isInline,
        throwOnError: false
      })
    );
  };

  useMemo(createHtml, [latex, isInline]);
  if (isInline) {
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  }
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default LatexRender;
