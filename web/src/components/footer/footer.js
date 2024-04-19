import React from "react";

import Container from "react-bootstrap/Container";
import PartnershipLogos from "./PartnershipLogos";
import FooterBoxes from "./FooterBoxes";
import FooterCopyright from "./FooterCopyright";
import "./footer.scss";

const Footer = ({ navMenuItems }) => {
  return (
    <footer className="footer sectionOn">
      <Container>
        <PartnershipLogos></PartnershipLogos>
        <FooterBoxes data={navMenuItems}></FooterBoxes>
        <FooterCopyright></FooterCopyright>
      </Container>
    </footer>
  );
};

export default Footer;
