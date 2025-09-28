// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; 

function Navbar() {
  // State to track if the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Array of your navigation links, including the new 'Home' link
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
  ];

  return (
    <nav className="bg-[#0d0f19] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Name - Always Visible */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-purple-400">
              &lt;<span className="text-xl font-bold text-white">Aashi</span>/<span className="text-xl font-bold text-white">Garg</span>&gt;
            </Link>
          </div>

          {/* 1. Desktop Menu (Visible on large screens) */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="hover:text-purple-400 transition-colors text-lg"
              >
                {link.name}
              </Link>
            ))}
        
            <a
              href="https://github.com/AashiGarg-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-purple-400 rounded-lg px-4 py-2 hover:bg-purple-400 hover:text-white transition-colors"
            >
              My Github
            </a>
          </div>

          {/* 2. Mobile Menu Button (Visible on small screens) */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-400"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* 3. Mobile Menu Panel (Slide Down) */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } w-full`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={toggleMenu} // Close menu when a link is clicked
              className="text-white hover:bg-gray-700 hover:text-purple-400 block w-full text-center px-3 py-2 rounded-md text-base font-medium"
            >
              {link.name}
            </Link>
          ))}
          
          {/* My Github Button (Mobile) */}
          <a
            href="https://github.com/AashiGarg-tech"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
            className="border-2 border-purple-400 rounded-lg w-3/4 my-2 px-4 py-2 text-center hover:bg-purple-400 transition-colors text-base font-medium inline-block"
          >
            My Github
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;