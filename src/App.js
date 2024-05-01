import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// Import logo (demo)
import logo from './logo.svg';

// Import css
import './App.css';
import './scss/main.css';
import './scss/skin.css';

// Import components
import Header from './layout/Header';
import MainContent from './layout/MainContent';
import NotFound from './layout/NotFound';
import Footer from './layout/Footer';

export default function App() {  
  const myPathname = window.location.pathname;
  return (
    <body id="wrapper">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<MainContent />} />
          <Route path="/:slug" element={<MainContent pathname={myPathname} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </body>
  );
}
