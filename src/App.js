import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Expertise from './components/Expertise';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
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
            : (
              <Route path="/expertise/*" element={<Expertise setIsOpen={setIsOpen} />}>
                <Route path="" element={<Navigate to="skills" />} />
                <Route path="skills" element={<Skills />} />
                <Route path="experience" element={<Experience />} />
                <Route path="education" element={<Education />} />
              </Route>
            )
        }
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
