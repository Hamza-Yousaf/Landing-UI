import React, { Component } from 'react';
import { 
  Jumbotron,
  Button,
  Row,
  Col,
  Container 
  } from 'reactstrap';
import './Header.css';

class Header extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <Row>
      
        <Jumbotron className="header_body">
        <Col xs="12" sm="12">
        <div className="nav_container">
          <nav className="navbar navbar-default nav_container">
            <div class="container-fluid">
              <div class="navbar-header">
                <button type="button" className="navbar-toggle nav_custom_toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>                           
                </button>
                <a class="navbar-brand" href="#"><span className="nav_heading">thin<b>block</b></span></a>
              </div>
              <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav navbar-right">
                  <li className="nav_rightSide_outline"><a href="#" ><span className="nav_rightSide_bar_content">Our Solution</span></a></li>
                  <li className="nav_rightSide_outline"><a href="#"><span className="nav_rightSide_bar_content">Readmap</span></a></li>
                  <li className="nav_rightSide_outline"><a href="#"><span className="nav_rightSide_bar_content">API</span></a></li>
                  <li className="nav_rightSide_outline"><a href="#"><span className="nav_rightSide_bar_content">FAQ</span></a></li>
                  <li className="nav_rightSide_outline"><a href="#"><span className="nav_rightSide_bar_content">Contact Sales</span></a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        </Col>
          <Col xs="12" sm="12">
          <br/><br/>
         <center>
        <h1 className="display-3">Automation for blockchains</h1>
        <p className="lead">Thinblock connects blockchain platforms with third-party services</p>
        <p className="lead"> to help you build smart application</p>    
        <p className="lead">
          <Button color="primary header_content_btn" size="md">REQUEST ACCESS</Button>
          <Button color="primary header_content_btn" size="md">DOCS</Button>
        </p>
        </center>
        </Col>
         </Jumbotron>
      </Row>
    );
  }
}

export default Header;