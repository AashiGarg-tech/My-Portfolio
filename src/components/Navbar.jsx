// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-16 py-4 bg-[#0d0f19] text-white">
      <div className="text-xl font-bold text-purple-400">&lt;<span className="text-xl font-bold text-white">Aashi</span>/<span className="text-xl font-bold text-white">Garg</span>&gt;</div>
      <ul className="flex space-x-6">
      <li><Link to="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
        <li><Link to="/about" className="hover:text-purple-400 transition-colors">About</Link></li>
        <li><Link to="/skills" className="hover:text-purple-400 transition-colors">Skills</Link></li>
        <li><Link to="/experience" className="hover:text-purple-400 transition-colors">Experience</Link></li>
        <li><Link to="/projects" className="hover:text-purple-400 transition-colors">Projects</Link></li>
        <li><Link to="/education" className="hover:text-purple-400 transition-colors">Education</Link></li>
        <li><a
  href="https://github.com/AashiGarg-tech"
  target="_blank"
  rel="noopener noreferrer"
  className="border-2 border-purple-400 rounded-lg px-4 py-2 hover:bg-purple-400 hover:text-white transition-colors"
>
  My Github
</a>
</li>
      </ul>
    </nav>
  );
}

export default Navbar;