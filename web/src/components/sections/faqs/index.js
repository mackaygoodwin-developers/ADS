import React,{useState} from "react";
import Helmet from "react-helmet";
import { Row, Col, Container, Accordion, Card } from "react-bootstrap";
import { Link } from "gatsby";
import blocksToHtml from "@sanity/block-content-to-html";

import PortableText from "../../portableText";
import "./faq.scss";

function Faqs(props) {
  let json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      props.faq.map(data => ({
        "@type": "Question",
        name: data.heading,
        acceptedAnswer: {
          "@type": "Answer",
          text: blocksToHtml({
            blocks: data.subText
          })
        }
      }))
    ]
  };
  const [togg,toggleEvn] = useState(null);
  const changeState = (ind) =>{
    if(togg==ind){
      toggleEvn(null);
    }
    else{
      toggleEvn(ind);
    }
  }

  return (
    <section className={`faq_saction ${props.grey ? "sectionOn" : ""}`}>
      {json && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(json)}</script>
        </Helmet>
      )}
      <Container>
        <Row className="justify-content-md-center">
          <Col md={8}>
            <div className="custom_acco">
              <h2>{props.heading}</h2>
              <PortableText blocks={props.content} />
              <Accordion>
                {props.faq &&
                  props.faq.map((data, index) => (
                    <Card className={togg==index?'active card':'card'} key={index + 1}>
                      <Accordion.Toggle className="card_header" onClick={()=>changeState(index)} variant="link" eventKey={index + 1}>
                        {data.heading}
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey={index + 1}>
                        <Card.Body className="card_body">
                          <PortableText blocks={data.subText} />
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  ))}
              </Accordion>

              {props.route && (
                <div className="view_saction">
                  <Link to={`/${props.route.slug.current}`}>View all FAQs</Link>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Faqs;
