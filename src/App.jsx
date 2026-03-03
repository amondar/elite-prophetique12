import React from 'react';
import './App.css'
import Header from './components/Header';
import BookPromo from './components/BookPromo';
import About from './components/About';
import Community from './components/Community';
import Footer from './components/Footer';


function App() {
  return (
    <div className="app-container">
      <Header />
      <BookPromo />
      <About />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
