import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header/Header.js';
import Gallery from './Component/Gallery/Gallery.js';
import Event from './Component/Event/Event.js';
import Activity from './Component/Activity/Activity.js';
import Wallet from './Component/Wallet/Wallet.js';
import Roadmap from './Component/Roadmap/Roadmap.js';
import Footer from './Component/Footer/Footer.js';
import {Container} from 'reactstrap';
class App extends Component {
  render() {
    return (
      <Container>
        <Header/>
        <Gallery/>
        <Event/>
        <Activity/>
        <Wallet/>
        <Roadmap/>
        <Footer/>
      </Container>
    
    );
  }
}

export default App;
