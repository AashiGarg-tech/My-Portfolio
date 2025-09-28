import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ExperiencePage = () => {
  const educationData = [
    {
      title: 'Under AI/DS Department of Indira Gandhi Delhi Technical University For Women',
      institution: 'Internship in MERN Stack',
      dates: '2 June 2025 - 27 July 2025',
      location: 'Online',
      description: 'Gained hands-on experience of web development tools and created websites for real-world purposes.',
      achievements: [
        'Created an Employee hiring Website using Backend',
        'Created a basic To-Do List App using frontend'
      ],
      coursework: [
        'NodeJs',
        'ReactJs',
        'MongoDB',
        'JS',
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
        <div className={`bg-[#12141f] p-6 rounded-lg shadow-lg ${contentClasses} ${positionClasses} mt-4`}>
          <h3 className="text-2xl font-bold text-white pb-4">{item.institution}</h3>
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
      <h1 className="text-4xl md:text-5xl font-bold text-center text-purple-400 mb-4">Experience</h1>
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

export default ExperiencePage;