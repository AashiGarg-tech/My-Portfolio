// src/pages/EducationPage.jsx

import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const EducationPage = () => {
  const educationData = [
    {
      title: 'Bachelor of Technology in Computer Science and Engineering (AI specialization)',
      institution: 'Indira Gandhi Delhi Technical University For Women',
      dates: '2024 - Present',
      location: 'Kashmiri Gate, Delhi, India',
      cgpa: '9.62/10',
      description: 'Focused on software engineering principles, data structures, algorithms, and web development. Completed senior capstone project on distributed systems.',
      achievements: [
        'Secured 9.62 CGPA in 1st Year',
        'Represented College in RBI State level quiz',
        'IEEE (Tech) Associate',
      ],
      coursework: [
        'Data Structures & Algorithms',
        'CyberSecurity',
        'Database Systems',
        'Web Development',
        'Artificial Intelligence',
      ],
    },
    {
      title: 'Student',
      institution: 'The Vivekananda School',
      dates: '2022-2024',
      location: 'Narela, Delhi, India',
      description: 'Studied in this school for 2 years. Made core memories and overall development.',
      achievements: [
        'Secured 94% in Class 12 (CBSE)',
      ],
      coursework: [
        'Adaptability',
        'Flexibility'
      ],
    },
    {
      title: 'Student',
      institution: 'Greenway Modern School',
      dates: '2010 - 2022',
      location: 'Dilshad Garden, Delhi, India',
      description: 'Studied in this school till 10th grade. It made my childhood memorable and provided me invaluable experiences.',
      achievements: [
        '1st in class 10 (CBSE)- 98.8%',
        'NCC (A Grade Certificate)',
        '1st Position in Zonal and District level Singing Competition',
        '20+ SOF Gold Medals',
      ],
      coursework: [
        'Leadership',
        'Teamwork',
        'communication skills',
        'HTML',
        'CSS',
      ],
    },
  ];

  const renderEducationItem = (item, index) => {
    const isEven = index % 2 === 0;
    const contentClasses = isEven ? 'lg:pr-12' : 'lg:pl-12';
    const positionClasses = isEven ? 'lg:col-start-1 lg:text-left' : 'lg:col-start-2';
    const dotClasses = isEven ? '-right-2 lg:-right-2' : '-left-2 lg:-left-2';

    return (
      <div key={index} className="flex flex-col lg:grid lg:grid-cols-2 relative mb-12">
        {/* Timeline Dot */}
        {/* <div className={`absolute top-0 transform -translate-x-1/2 h-4 w-4 rounded-full bg-purple-500 border-2 border-white ${dotClasses}`}></div> */}

        {/* Content Box */}
        <div className={`bg-[#12141f] p-6 rounded-lg shadow-lg ${contentClasses} ${positionClasses} mt-4`}>
          <h3 className="text-2xl font-bold text-white">{item.institution}</h3>
          <p className="text-purple-400 font-semibold mb-2">{item.title}</p>
          <div className="flex items-center text-gray-400 text-sm space-x-4 mb-4">
            <span className="flex items-center">
              <FaCalendarAlt className="mr-1" /> {item.dates}
            </span>
            <span className="flex items-center">
              <FaMapMarkerAlt className="mr-1" /> {item.location}
            </span>
            {item.gpa && <span>GPA: {item.gpa}</span>}
          </div>
          <p className="text-gray-300 mb-4">{item.description}</p>
          
          <h4 className="font-semibold text-purple-400 mb-2">Key Achievements:</h4>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            {item.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>

          <h4 className="font-semibold text-purple-400 mb-2">Skills Gained:</h4>
          <div className="flex flex-wrap gap-2">
            {item.coursework.map((course, i) => (
              <span key={i} className="bg-[#242633] text-purple-300 text-sm px-3 py-1 rounded-full">{course}</span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-8 pt-16 md:p-16 text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-purple-400 mb-4">Education</h1>
      <div className="border-b-2 border-purple-400 w-32 mx-auto mb-16"></div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-0.5 h-full bg-purple-500"></div>
        </div>
        <div className="relative max-w-4xl mx-auto">
          {educationData.map((item, index) => renderEducationItem(item, index))}
        </div>
      </div>
    </div>
  );
};

export default EducationPage;