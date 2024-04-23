import React, { useState, useEffect } from 'react';

import logo from './logo.svg';

import './App.css';
import './scss/main.css';
import './scss/skin.css';

// Import components
import TopHeader from './components/TopHeader';
import Header from './components/Header';
import Carousel from './components/Carousel';
import PlainText from './components/PlainText';
import PricingTable from './components/PricingTable';
import Footer from './components/Footer';
import BottomFooter from './components/BottomFooter';

function App() {
  return (
    <body id="wrapper">
      <TopHeader />
      <Header />
      <Carousel />
      <PlainText />
      <PricingTable />
      <Footer />
      <BottomFooter />
    </body>
  );
}

export default App;
