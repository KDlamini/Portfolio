import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Expertise from './components/Expertise';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './styles/app/App.css';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="App">
      <Navbar isOpen={isOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        {
          isOpen
            ? <Route path="/about" element={<About setIsOpen={setIsOpen} />} />
            : <Route path="/expertise/*" element={<Expertise isOpen={isOpen} setIsOpen={setIsOpen} />} />
        }
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
