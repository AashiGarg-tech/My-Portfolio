import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 md:p-16 space-y-8 md:space-y-0 md:space-x-12">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
          Hi, I am <br />
          <span className="text-purple-400">Aashi Garg</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          I am a <span></span>
        </h2>
        <p className="text-lg text-gray-300 max-w-lg mx-auto md:mx-0">
          I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
        </p>
        <div className="mt-8">
          <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition duration-300 shadow-lg">
            Check Resume
          </button>
        </div>
      </div>
      <div className="flex-shrink-0 relative">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl transition-all duration-300 transform hover:scale-105">
          <img src="https://placehold.co/500x500/A020F0/ffffff?text=Profile" alt="Profile of Rishav Chanda" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default About;