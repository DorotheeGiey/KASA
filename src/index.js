import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Logement from './pages/Logement'

import Header from './composants/Header'
import Footer from './composants/Footer'
import Error from './composants/Error'


import './index.scss'

import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error />} />
          <Route path="/Logement/:id" element={<Logement />} />
      </Routes>
      <Footer />
    </Router>

  </React.StrictMode>
);

reportWebVitals();
