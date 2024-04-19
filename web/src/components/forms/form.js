import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";

import "./formStyles.scss";

function FormComp(props) {
  const formHeading = props.data.formHeading || null;
  const formSubHeading = props.data.formSubHeading || null;

  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  function setCookie(name, value, days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
    document.cookie = name + "=" + value + expires;
  }
  function getParam(p) {
    var match = RegExp("[?&]" + p + "=([^&]*)").exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, " "));
  }

  useEffect(() => {
    //hubspot
    let scriptEle = document.createElement("script");
    scriptEle.setAttribute("src", '//js.hsforms.net/forms/embed/v2.js');
    scriptEle.setAttribute("type", "text/javascript");
    document.body.appendChild(scriptEle);
    scriptEle.addEventListener("load", () => {
      if ('hbspt' in window) {
          window.hbspt.forms.create({
           region: "na1",
           portalId: "40112486",
           formId: "110267c1-7efe-4149-8165-83e767c2b708",
          target: "#git_form"
        });
      }
    });

    var href = window.location.href;
    if (href.indexOf("?") != -1) {
      var hrefsplit = href.split("?");

      var param = hrefsplit[1].split("&");
      for (var i = 0; i < param.length; i++) {
        var a = param[i].split("=");
        if (a[0] == "utm_source") document.getElementById("00N2w00000DXDap").value = a[1];
        if (a[0] == "utm_medium") document.getElementById("00N2w00000DXDbN").value = a[1];
        if (a[0] == "utm_campaign") document.getElementById("00N2w00000DXDb0").value = a[1];
        if (a[0] == "utm_content") document.getElementById("00N2w00000DXDan").value = a[1];
        if (a[0] == "utm_term") document.getElementById("00N2w00000DXDbI").value = a[1];
      }

      var name = new RegExp("(?:^|;\\s*)gclid=([^;]*)").exec(document.cookie);
      document.getElementById("00N2w00000DXDb8").value = name ? name[1].split(",")[1] : "";

      var gclid = getParam("gclid");
      if (gclid) {
        var gclsrc = getParam("gclsrc");
        if (!gclsrc || gclsrc.indexOf("aw") !== -1) {
          setCookie("gclid", gclid, 90);
        }
      }

      document.getElementById("00N2w00000DXDbW").value = window.location;
    }
  });

  return (
    <div class="free_form"><h3>{formHeading}</h3>{formSubHeading && <p>{formSubHeading}</p>}
    <div id="git_form"></div></div>
  );
}

export default FormComp;
