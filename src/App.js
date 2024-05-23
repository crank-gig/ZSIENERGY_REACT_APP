import React from 'react';
import './component_styles/base.css';

import Home from './components/Home';
import About from './components/About';
import Products from './components/Product';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}


export default App;
