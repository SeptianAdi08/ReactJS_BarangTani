import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import React from 'react';
import './App.css';
import HeadlineCards from './components/HeadlineCards.jsx';
import Food from './components/Food.jsx'


function App() {
  return (
    <div>
          
  <Navbar></Navbar>
  <Hero></Hero>
  <HeadlineCards></HeadlineCards>
  <Food></Food>
    </div>
  );
}

export default App;
