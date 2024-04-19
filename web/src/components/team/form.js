import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";

function FormComp(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="free_form">
        <h3>Write your Message</h3>
        <Row>
          <Col md={6}>
            <Form.Control required type="text" placeholder="Name*" />
          </Col>
          <Col md={6}>
            <Form.Control required type="email" placeholder="Email*" />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Control required type="text" placeholder="Telephone*" />
          </Col>
          <Col md={6}>
            <select id="state">
              <option value="nsw">NSW</option>
              <option value="qld">QLD</option>
              <option value="sa">SA</option>
              <option value="tas">TAS</option>
              <option value="vic">VIC</option>
              <option value="wa">WA</option>
              <option value="act">ACT</option>
              <option value="nt">NT</option>
            </select>
            <div className="border"></div>
            <input type="text" placeholder="Postcode" className="pin_code" />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <textarea rows="4" cols="50" placeholder="Financial Situation"></textarea>
          </Col>
        </Row>
        <button type="submit">Get a Free Consultation</button>
        <span className="required">* = required field</span>
      </div>
    </Form>
  );
}

export default FormComp;
