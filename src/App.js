import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import Nav from "./components/Navbar/Nav.jsx";
import Contact from './components/Contact/Contact'
import Portfolio from "./components/Portfolio/Portfolio"
import Section from './components/About/section'
import Footer from './components/Footer/Footer'
import Testimonial  from './components/testimonial/Testimonial';
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />  
      <Portfolio />  
      <Section />
      <Testimonial />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
 