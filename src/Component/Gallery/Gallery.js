import React, { Component } from 'react';
import './Gallery.css';
import { 
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
 } from 'reactstrap';

class Gallery extends Component {
  render() {
    return (
      <Row>
        <center>
        <br/><br/><br/>
        <h1 className="display-3">Empower your blockchain workflows</h1>
        <p className="lead gallery_content">ThinBlock provide a interoperability layer to connect APIs.</p>
        <p className="lead gallery_content">apps,wallets,exchanges and blockchains.</p>       
        </center>
        <Col xs="12" sm="1"></Col>
        <Col xs="12" sm="2">
          <Card>
          <CardImg top width="50%" src="./img/api.png" alt="Card image cap" />
          <CardBody>
            <CardTitle className="gallery_title">APIs</CardTitle>
            <CardText className="gallery_content">User our automation API to invoke triggers be notified when an event happed.</CardText>
          </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="2">
          <Card>
            <CardImg top width="50%" src="./img/apps.png" alt="Card image cap" />
            <CardBody>
              <CardTitle className="gallery_title">Apps</CardTitle>
              <CardText className="gallery_content">Access to countiess integrations with your daily app via Zapier integration</CardText>
            </CardBody>
            </Card>
        </Col>
        <Col xs="12" sm="2">
          <Card>
            <CardImg top width="50%" src="./img/exchanges.png" alt="Card image cap" />
            <CardBody>
              <CardTitle className="gallery_title">Exchanges</CardTitle>
              <CardText className="gallery_content">We connect to the most popular exchange in order to help you automating your trading</CardText>
            </CardBody>
            </Card>  
        </Col>
        <Col xs="12" sm="2">
         <Card>
          <CardImg top width="50%" src="./img/wallets.png" alt="Card image cap" />
          <CardBody>
            <CardTitle className="gallery_title">Wallets</CardTitle>
            <CardText className="gallery_content">Use our wallet as a service with zero-knowledge to seamlessly integrate wallets and automation.</CardText>
          </CardBody>
          </Card>  
        </Col>
        <Col xs="12" sm="2">
        <Card>
          <CardImg top width="50%" src="./img/blockchains.png" alt="Card image cap" />
          <CardBody>
            <CardTitle className="gallery_title">Blockchains</CardTitle>
            <CardText className="gallery_content"> Automatically create transactions invoke smart contracts or receive security notifications</CardText>
          </CardBody>
          </Card>  
        </Col>
          <Col xs="12" sm="1"></Col>
        </Row>
    );
  }
}

export default Gallery;