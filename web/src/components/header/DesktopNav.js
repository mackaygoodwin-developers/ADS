import React from "react";
import { Link } from "gatsby";
import { Navbar, Nav } from "react-bootstrap";
import { getGatsbyImageData } from "gatsby-source-sanity";
import { GatsbyImage } from "gatsby-plugin-image";

import clientConfig from "../../../client-config";

function DesktopNav(props) {
  const navMenuItems = props.navMenuItems;

  //Build Links with Gatsby <Link> or reg link if set within menu builder
  const getNavURL = (obj, isFeature) => {
    const icon = maybeImage(obj.icon) || null;

    let linkTxt = null;
    if (icon) {
      linkTxt = <>{obj.title}</>;
    } else {
      linkTxt = obj.title;
    }

    if (obj.landingPageRoute) {
      return (
        <Link className="dropdown-item" to={`/${obj.landingPageRoute.slug.current}`} key={obj._key}>
          {icon}
          <p>{linkTxt}</p>
        </Link>
      );
    }
    if (obj.route) {
      return (
        <Link className="dropdown-item" to={`/${obj.route}`} key={obj._key}>
          {icon}
          <p>{obj.title}</p>
        </Link>
      );
    }
    if (obj.link) {
      return (
        <a className="dropdown-item" href={obj.link} key={obj._key}>
          {icon}
          <p>{obj.title}</p>
        </a>
      );
    }
  };

  const maybeImage = (illustration) => {
    let img = null;
    if (illustration && illustration.image && illustration.image.asset && !illustration.disabled) {
      const fixedProps = getGatsbyImageData(
        illustration.image,
        { width: 60, height: 60, quality: 80 },
        clientConfig.sanity
      );

      img = <GatsbyImage className="navIcon" image={fixedProps} alt={illustration.image.alt} />;
    }
    return img;
  };

  return (
    <Navbar className="test12 navbar navbar-expand-lg navbar-light" expand="lg">
      <Navbar.Toggle />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar navbar-expand-md navbar-light">
          <div className="navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {navMenuItems &&
                navMenuItems.map((i) =>
                  i._type === "cta" ? (
                    // if cta (link)
                    getNavURL(i, false)
                  ) : (
                    // if branch (dropdown)
                    <li className="nav-item dropdown" key={i._key}>
                      <Link
                        className="nav-link dropdown-toggle"
                        to={`/${i.route || i.landingPageRoute.slug.current}`}
                        id="navbarDropdownMenuLink"
                      >
                        {i.title}
                      </Link>

                      <ul className={`dropdown-menu ${i.featureImage ? "wide" : ""}`}>
                        {i.children.map((ii) => (
                          <li key={ii._key}>{getNavURL(ii, i.featureImage)}</li>
                        ))}
                      </ul>
                    </li>
                  )
                )}
            </ul>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default DesktopNav;
