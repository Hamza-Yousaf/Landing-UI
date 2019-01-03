import React, { Component } from 'react';
import './Footer.css';
import { 
  Row,
  Col,
  Button
 } from 'reactstrap';


class Footer extends Component {
  render() {
    return (
     
    <div className="footer_body">
      <Row>
        <Col xs="6" sm="6">
          <h1 className="footer_heading">Ready to get started?</h1>
          <h1>Get in touch or read the docs</h1>
        </Col>
        <Col xs="6" sm="6">
        <p className="lead">
          <Button color="primary footer_content_btn" size="md">REQUEST ACCESS</Button>
          <Button color="primary footer_content_btn" size="md">DOCS</Button>
        </p>
        </Col>
      </Row>
    <br/><br/>
      <hr/>
      <Row className="footer_gallery">
        <Col xs="4" sm="4">
        <h3>thin<b>block</b></h3>
        </Col>
        <Col xs="8" sm="8" className="footer_gallery_content">
        <Col xs="4" sm="4">
        <span>DEVELOPERS</span><br/><br/>
        <p>Documentation</p>
        <p>Github</p>
        <p>API Status</p>
        </Col>
        <Col xs="4" sm="4">
        <span>RESOURCES</span><br/><br/>
        <p>Terms & Conditons</p>
        <p>Privacy Policy</p>
        </Col>
        <Col xs="4" sm="4">
        <span>SUPPORT</span><br/><br/>
        <p>Help Center</p>
        <p>Twitter</p>
        <p>Email</p>
        </Col>
        </Col>
      </Row>
    </div>
    );
  }
}

export default Footer;