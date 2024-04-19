import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { Link } from "gatsby";

import PortableText from "../../portableText";
import "./process.scss";

function Process(props) {
  const monthCount = props.stage.length;

  const _reset = (event) => {
    document.querySelectorAll("#tabIcons .byLink").forEach((el) => {
      el.className = "nav-link";
    });

    document.querySelectorAll("#tabContent .byLink").forEach((el) => {
      el.className = "fade tab-pane";
    });
  };

  const _next = (event) => {
    let icons = document.querySelectorAll("#tabIcons .nav-item > a");
    let content = document.querySelectorAll("#tabContent > div");
    let array = [].slice.call(icons);
    let activeIndex = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i].classList.contains("active")) {
        activeIndex = i;
      }
    }

    if (activeIndex < array.length - 1) {
      icons[activeIndex].className = "nav-link";
      icons[activeIndex + 1].className = "nav-link active byLink";
      content[activeIndex].className = "fade tab-pane";
      content[activeIndex + 1].className = "fade tab-pane active show byLink";
    }

    event.preventDefault();
  };

  const _prev = (event) => {
    let icons = document.querySelectorAll("#tabIcons .nav-item > a");
    let content = document.querySelectorAll("#tabContent > div");
    let array = [].slice.call(icons);
    let activeIndex = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i].classList.contains("active")) {
        activeIndex = i;
      }
    }

    if (activeIndex > 0) {
      icons[activeIndex].className = "nav-link";
      icons[activeIndex - 1].className = "nav-link active byLink";
      content[activeIndex].className = "fade tab-pane";
      content[activeIndex - 1].className = "fade tab-pane active show byLink";
    }

    event.preventDefault();
  };
  return (
    <section className="process">
      <Container>
        <div className="saction_titel">
          <h2>{props.heading}</h2>
          <p>{props.subHeading}</p>
        </div>
        <div className="appointed_saction">
          <h5>
            <span>{monthCount}</span> Steps
          </h5>

          <Tab.Container id="ProcessTabs" defaultActiveKey={props.stage[0]._key}>
            <Nav variant="pills" id="tabIcons" onSelect={_reset}>
              {props.stage.map((process, index) => (
                <Nav.Item key={process._key}>
                  <Nav.Link eventKey={process._key}>
                    <h6>
                      <span>{index + 1}</span>
                      <br />
                      Stage
                    </h6>
                    <p>{process.shortHeading}</p>
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>

            <Tab.Content id="tabContent">
              {props.stage.map((process, index) => (
                <Tab.Pane key={process._key} eventKey={process._key}>
                  <div className="app_lib">
                    <h3>{process.heading}</h3>
                    <PortableText blocks={process.content} />
                  </div>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Tab.Container>

          <Row>
            <Col md={1}></Col>
            <Col md={10}>
              <div className="stat_section">
                <a href="/#" className="pve_but" onClick={_prev}>
                  Previous Stage
                </a>

                <Link className="btnRed" to={`/${props.ctaRoute.slug.current}`}>
                  Start a Free Consultation
                </Link>
                <a href="/#" className="next_but" onClick={_next}>
                  Next Stage
                </a>
              </div>
            </Col>
            <Col md={1}></Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Process;
