// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage'; // Rename the main page to HomePage
import AboutPage from './components/AboutPage'; 
import SkillsPage from "./components/SkillsPage";
import EducationPage from './components/EducationPage';
import ProjectsPage from './components/ProjectsPage';
import ExperiencePage from './components/ExperiencePage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#0d0f19]">
        <Navbar />
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/projects" element={<ProjectsPage />} /> 
          <Route path="/experience" element={<ExperiencePage />} /> 
        </Routes>        
        <Footer /> {/* <-- Add the Footer here */}
      </div>
    </Router>
  );
}

export default App;