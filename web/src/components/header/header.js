import React from "react";
import { useEffect, useState } from "react";
import SiteLogo from "./SiteLogo";
import SiteMainNav from "./SiteMainNav";
import "./header.scss";

function Header({ navMenuItems = [], site }) {
  const [showText, setShowText] = useState(false);
  let modificator = showText ? "btnopen" : "";

  useEffect(() => {
    const header = document.getElementById("myHeader");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener(
      "scroll",
      () => {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      },
      { passive: true }
    );
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <header className="inner_page_main">
      <div className="header" id="myHeader">
        <div className="container-fluid">
          <div className="same_part">
            <SiteLogo />

            <button className={"btntoggle " + modificator} onClick={() => setShowText(!showText)}>
              Toggle Text
            </button>

            <SiteMainNav navMenuItems={navMenuItems} site={site} />
          </div>
        </div>

        {showText && (
          <div className="stickymenu">
            <SiteMainNav navMenuItems={navMenuItems} site={site} />
          </div>
        )}
      </div>
    </header>
  );
}

export default React.memo(Header);
