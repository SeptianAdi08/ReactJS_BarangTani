import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import React from 'react';
import './App.css';
import HeadlineCards from './components/HeadlineCards.jsx';


function App() {
  return (
    <div>
          
  <Navbar></Navbar>
  <Hero></Hero>
  <HeadlineCards></HeadlineCards>
    </div>
  );
}

export default App;
