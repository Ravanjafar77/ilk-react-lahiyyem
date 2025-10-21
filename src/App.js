// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Elements from './components/Elements';
import HeroSection from './components/HeroSection'; 
import Footer from './components/Footer'; 

import './App.css';



function App() {
  return (
    <div>
      <Navbar/>
     <HeroSection/>
     <Elements/>
     <Footer/>
    </div>
)
}

export default App;
