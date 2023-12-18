import './App.css';
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutMe />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      

    </div>
  );
}

export default App;
