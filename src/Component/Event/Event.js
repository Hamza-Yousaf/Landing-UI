import React, { Component } from 'react';
import './Event.css';
import { 
  Row,
  Col
 } from 'reactstrap';

class Event extends Component {
  render() {
    return (
      <Row className="event_body">
          <Col xs="6" sm="8">
            <h1>Schedule triggers with different sources for events</h1>
            <img className="event_left_img" src="./img/code-image.png"/>
          </Col>
          <Col xs="6" sm="4">
          <img className="event_right_img" src="./img/event-content-image.png"/>
          </Col>
      </Row>
    );
  }
}

export default Event;