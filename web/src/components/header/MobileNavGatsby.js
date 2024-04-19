import React, { useState } from "react";
import { Link } from "gatsby";
import Menu from "react-burger-menu/lib/menus/slide";
import styled from "@emotion/styled";

export default (props) => {
  const navMenuItems = props.navMenuItems;
  const [menuState, setMenuOpen] = useState({ menuOpen: false });

  const closeMenu = () => {
    setMenuOpen({ menuOpen: false });
  };

  const getNavURL = (obj) => {
    if (obj.landingPageRoute) {
      return (
        <Link
          className="menu-item"
          to={`/${obj.landingPageRoute.slug.current}`}
          key={obj._key}
          onClick={() => closeMenu()}
        >
          {obj.title}
        </Link>
      );
    }
    if (obj.route) {
      return (
        <Link className="menu-item" to={`/${obj.route}`} key={obj._key} onClick={() => closeMenu()}>
          {obj.title}
        </Link>
      );
    }
    if (obj.link) {
      return (
        <a className="menu-item" href={obj.link} key={obj._key} onClick={() => closeMenu()}>
          {obj.title}
        </a>
      );
    }
  };

  return (
    <>
      <TopNav className="mobnav" opened={menuState}>
        <SideMenu>
          <Menu
            isOpen={menuState.menuOpen}
            id="mobilemenu"
            right
            width={"90%"}
            outerContainerId={"gatsby-focus-wrapper"}
          >
            <ul>
              {navMenuItems &&
                navMenuItems.map((i) => (
                  <li key={i._key} className="top">
                    <b>{getNavURL(i)}</b>

                    <ul>
                      {i.children.map((ii) => (
                        <li key={ii._key} className="bottom">
                          {getNavURL(ii)}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
            </ul>
          </Menu>
        </SideMenu>
      </TopNav>
    </>
  );
};

const TopNav = styled.div`
  display: block;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  z-index: 1101;
  top: 0px;
`;

const SideMenu = styled.div`
  a {
    font-size: 16px;
    color: #b8c6cf !important;
  }
  ul {
    outline: none;
  }

  li {
    padding: 5px 10px;
  }

  .bm-item > .top li:first-of-type {
    border-top: 1px solid;
    border-color: rgba(111, 111, 111, 0.2) transparent;
  }

  .bottom {
    margin-left: 5px;
  }
  /* The rest copied directly from react-burger-menu docs */
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 36px;
    top: 36px;
  }
  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }
  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  .bm-menu-wrap {
    top: 0px !important;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #1d2542;
    padding: 25px;
    font-size: 1.15em;
  }

  .bm-overlay {
  }

  @media (min-width: 992px) {
    display: none;
  }
`;
