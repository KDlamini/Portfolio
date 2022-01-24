import React, { useState, useEffect } from 'react';
import {
  Routes, Route, Navigate, useNavigate,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Expertise from './components/Expertise';
import Skills from './components/Skills';
import Certification from './components/Certification';
import Experience from './components/Experience';
import Education from './components/Education';
import All from './components/All';
import WebApplications from './components/WebApplications';
import Games from './components/Games';
import ECommerce from './components/ECommerce';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './styles/app/App.css';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      navigate('/');
    }
  }, []);

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
                <Route path="certification" element={<Certification />} />
              </Route>
            )
        }
        <Route path="/projects/*" element={<Projects />}>
          <Route path="" element={<Navigate to="all" />} />
          <Route path="all" element={<All />} />
          <Route path="web-applications" element={<WebApplications />} />
          <Route path="games" element={<Games />} />
          <Route path="e-commerce" element={<ECommerce />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
