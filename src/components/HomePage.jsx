// src/pages/HomePage.jsx

import React from 'react';
import HeroSection from './HeroSection'; // Ensure this path is correct
import AboutPage from "./AboutPage";
import SkillsPage from "./SkillsPage";
import EducationPage from './EducationPage';
import ExperiencePage from './ExperiencePage';
function HomePage() {
  return (
    <div className="flex flex-col flex-grow">
        <HeroSection />
        <AboutPage />
        <SkillsPage />
        <EducationPage />
        <ExperiencePage />
    </div>
  );
}

export default HomePage;