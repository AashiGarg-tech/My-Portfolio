import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import profileImage from '../assets/image.png';

function HeroSection() {
  const [text] = useTypewriter({
    words: ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Open Source Contributor'],
    loop: true, // Loop indefinitely
    typeSpeed: 100, // Speed of typing
    deleteSpeed: 80, // Speed of deleting
    delaySpeed: 1000, // Pause time before deleting
  });
  const RESUME_PATH = '/Resume-Aashi Garg (2).pdf'; 
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center p-8 lg:p-16 text-white relative overflow-hidden flex-1 bg-[#0d0f19] min-h-screen">
      
      <div className="flex-1 max-w-lg lg:pr-16 z-10 text-center lg:text-left">
        <p className="text-4xl lg:text-5xl font-semibold text-gray-200 mb-5">Hi, I am</p>
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">Aashi Garg</h1>
        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-200 mb-6">I am a <span className="text-2xl lg:text-3xl font-semibold text-purple-400 mb-6 min-h-12">{ text }</span><Cursor cursorStyle='|' cursorColor='#be82f8' /> {/* The blinking cursor */}
        </h2>
        <p className="text-gray-300 text-xl mb-8">
        I am a Computer Science and Engineering student with a passion for exploring the latest in technology and applying it to real-world solutions. I enjoy combining creativity with coding, building projects that make an impact, and continuously learning to expand my tech expertise.
        </p>
        <div className="flex justify-center lg:justify-start space-x-4 mb-8">
        <a 
            href={RESUME_PATH}
            target="_blank" // Opens the PDF in a new tab
            rel="noopener noreferrer" // Good practice for security with target="_blank"
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block" // Use inline-block to make the a tag act like a button
          >
            Check Resume
          </a>
        </div>
        <div className="flex justify-center lg:justify-start space-x-6 text-2xl">
          {/* Social icons */}
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-72 h-72 lg:w-96 lg:h-96 mt-12 lg:mt-0 z-10">
        <div className="absolute inset-0 bg-purple-500 rounded-full opacity-20 blur-2xl animate-spin-slow"></div>
        <img src={profileImage} alt="Aashi Garg" className="w-full h-full object-cover rounded-full border-4 border-gray-800" />
      </div>
    </section>
  );
}

export default HeroSection;