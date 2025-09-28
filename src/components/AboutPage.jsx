// src/pages/AboutPage.jsx

import React from 'react';

function AboutPage() {
  return (
    <div className="container mx-auto p-8 pt-16 md:p-16 text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-purple-400 mb-4">About Me</h1>
      <div className="border-b-2 border-purple-400 w-24 mx-auto mb-16"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section: Bio and Skills */}
        <div className="flex flex-col space-y-8">
          <div className="bg-[#12141f] p-8 rounded-lg shadow-lg">
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm a passionate Full Stack Developer with a strong foundation in modern web technologies. I love
              creating digital experiences that are not only functional but also user-friendly.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My journey in tech started with curiosity and has evolved into a deep commitment to crafting
              solutions that make a difference. I'm always eager to learn new technologies and take on challenging
              projects that push my boundaries.
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#12141f] p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-purple-400 mb-2">Frontend Focus</h3>
              <p className="text-gray-400 text-sm">Creating responsive, interactive user interfaces with modern frameworks and best practices.</p>
            </div>
            <div className="bg-[#12141f] p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-purple-400 mb-2">Backend Expertise</h3>
              <p className="text-gray-400 text-sm">Building scalable server-side applications and APIs with robust architecture.</p>
            </div>
            <div className="bg-[#12141f] p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-purple-400 mb-2">Problem Solving</h3>
              <p className="text-gray-400 text-sm">Approaching complex challenges with analytical thinking and creative solutions.</p>
            </div>
            <div className="bg-[#12141f] p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold text-purple-400 mb-2">Continuous Learning</h3>
              <p className="text-gray-400 text-sm">Staying updated with the latest technologies and industry best practices.</p>
            </div>
          </div>
        </div>

        {/* Right Section: Quick Facts and Interests */}
        <div className="flex flex-col space-y-8">
          {/* Quick Facts */}
          <div className="bg-[#12141f] p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Quick Facts</h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-400">Location</span>
                <span>Delhi, India</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-400">Education</span>
                <span>B.Tech CSE (AI Specialization)</span>
              </div>
              {/* <div className="flex justify-between">
                <span className="font-semibold text-gray-400">Projects</span>
                <span>list</span>
              </div> */}
              <div className="flex justify-between">
                <span className="font-semibold text-gray-400">Availability</span>
                <span>Open to Internships & Collaboration</span>
              </div>
            </div>
          </div>
          
          {/* Interests */}
          <div className="bg-[#12141f] p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Interests</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#242633] text-purple-300 text-sm font-semibold px-4 py-2 rounded-full">Web Development</span>
              <span className="bg-[#242633] text-purple-300 text-sm font-semibold px-4 py-2 rounded-full">UI/UX Design</span>
              <span className="bg-[#242633] text-purple-300 text-sm font-semibold px-4 py-2 rounded-full">Open Source</span>
              <span className="bg-[#242633] text-purple-300 text-sm font-semibold px-4 py-2 rounded-full">DSA</span>
              <span className="bg-[#242633] text-purple-300 text-sm font-semibold px-4 py-2 rounded-full">Problem solving</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;