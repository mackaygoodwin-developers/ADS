import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

function Layout(props) {
  const { children, navMenuItems, site } = props;
  return (
    <>
      <Header navMenuItems={navMenuItems} site={site} />
      <>{children}</>
      <Footer navMenuItems={navMenuItems} />
    </>
  );
}

export default Layout;
