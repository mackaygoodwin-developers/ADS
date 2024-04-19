import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Accordion, Card } from "react-bootstrap";
import { Link } from "gatsby";

function FooterBoxes(props) {
  const navMenuItems = props.data;
  const getNavURL = obj => {
    if (obj.landingPageRoute) {
      return <Link to={`/${obj.landingPageRoute.slug.current}`}>{obj.title}</Link>;
    }
    if (obj.route) {
      return <Link to={`/${obj.route}`}>{obj.title}</Link>;
    }
    if (obj.link) {
      return (
        <a href={obj.link} key={obj._key}>
          {obj.title}
        </a>
      );
    }
  };

  return (
    <div className="middle_footer">
      <Row>
        {navMenuItems &&
          navMenuItems.map((i, index) => (
            <Col md={3} xs={12} key={index}>
              <div className="middle_footer_sub">
                <div className="middle_footer_head">
                  <h4>{getNavURL(i)}</h4>
                </div>
                <div className="middle_footer_link">
                  <ul>
                    {i.children.map((ii, index) => (
                      <li key={index}>{getNavURL(ii)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
          ))}
      </Row>

      <div className="fmobile">
        <Accordion defaultActiveKey="0" className="footernav">
          {navMenuItems &&
            navMenuItems.map((i, index) => (
              <Card key={index + 1}>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey={index + 1}>
                  {i.title}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={index + 1}>
                  <Card.Body>
                    <div className="middle_footer_sub">
                      <div className="middle_footer_head">
                        <h4>{getNavURL(i)}</h4>
                      </div>
                      <div className="middle_footer_link">
                        <ul>
                          {i.children.map((ii, index) => (
                            <li key={index}>{getNavURL(ii)}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FooterBoxes;
//TODO: Lets see if we can make this 1 DOM instance. sepearate HTML for mobile footer seems overkill.
