import React, { useState } from "react";
import { Link } from "gatsby";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNavGatsby";
//import SearchIcon from "../../../static/images/SearchIcon.svg";
import PhoneIcon from "../../../static/images/Icon.svg";

const SiteMainNav = React.memo(function SiteMainNav(props) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="main_menu">
      <DesktopNav navMenuItems={props.navMenuItems} />

      <div className="tel_num">
        <p>
          <a href={`tel:${props.site.phoneNumber}`}>
            <img src={PhoneIcon} alt="Phone" />
            <span className="callNow">Call now</span> <span>{props.site.phoneNumber}</span>
          </a>
        </p>
      </div>

      {/*       <div className="search_saction">
        <a onClick={() => setShowSearch(!showSearch)}>
          <img src={SearchIcon} />{" "}
        </a>
      </div> */}

      <div className="btnfreeconst">
        <Link to={`/${props.site.ctaRoute.slug.current}`}>Get a Free Consultation</Link>
        {/* TODO: may need a static query here... */}
      </div>

      {showSearch && (
        <div className="boxsearch">
          <div className="fields">
            <button className="btnclose" type="button" onClick={() => setShowSearch(!showSearch)}>
              close
            </button>
            <input type="text" placeholder="Type to Search"></input>{" "}
            <button className="btnsubmit" type="submit"></button>
          </div>
        </div>
      )}
      <MobileNav navMenuItems={props.navMenuItems} />
    </div>
  );
});

export default SiteMainNav;
