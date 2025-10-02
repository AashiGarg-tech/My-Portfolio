import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/AashiGarg-tech', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/aashi-garg-3b6713326/', label: 'LinkedIn' },
    { icon: FaEnvelope, url: 'mailto:aashigarg2504@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
  ];

  return (
    <footer className="w-full bg-[#12141f] text-gray-400 p-8 mt-12 border-t border-purple-800/50 z-10">
      <div className="container mx-auto max-w-6xl">
        
        {/* Top Section: Logo, Links, and Socials */}
        <div className="flex flex-col justify-between items-center items-start border-b border-gray-700/50 pb-6 mb-6 space-y-6 space-y-0">

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center space-x-6">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-purple-400 transition-colors text-lg"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a 
                key={social.label}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xl hover:text-purple-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center text-sm">
          &copy; {currentYear} Aashi Garg. All rights reserved. | Developed with <span className="text-purple-400">React & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;