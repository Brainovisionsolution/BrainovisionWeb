import React, { useState } from 'react';
import { Brain, Clock, Award } from 'lucide-react';

// Import all module components
import Module1 from '../JobGrauntedcourses/Module1';
import Module2 from '../JobGrauntedcourses/Module2';
import Module3 from '../JobGrauntedcourses/Module3';
import Module4 from '../JobGrauntedcourses/Module4';
import Module5 from '../JobGrauntedcourses/Module5';
import Module6 from '../JobGrauntedcourses/Module6';
import Module7 from '../JobGrauntedcourses/Module7';
import Module8 from '../JobGrauntedcourses/Module8';
import Module9 from '../JobGrauntedcourses/Module9';
import Module10 from '../JobGrauntedcourses/Module10';

export default function Courses() {
  const course = {
    icon: Brain,
    title: 'AI Generalist Program (Complete Course)',
    duration: '12 months',
    skills: [
      'Python',
      'Machine Learning',
      'Deep Learning',
      'Generative AI',
      'LLMs',
      'Prompt Engineering',
    ],
    modules: [
      { title: 'Module 1', component: <Module1 /> },
      { title: 'Module 2', component: <Module2 /> },
      { title: 'Module 3', component: <Module3 /> },
      { title: 'Module 4', component: <Module4 /> },
      { title: 'Module 5', component: <Module5 /> },
      { title: 'Module 6', component: <Module6 /> },
      { title: 'Module 7', component: <Module7 /> },
      { title: 'Module 8', component: <Module8 /> },
      { title: 'Module 9', component: <Module9 /> },
      { title: 'Module 10', component: <Module10 /> },
    ],
  };

  const [activeModuleIndex, setActiveModuleIndex] = useState(0);

  return (
    <section
      id="courses"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500"
      style={{ fontFamily: 'Georgia, serif' }}
    >
      <div className="container mx-auto px-4">
        {/* Course Heading */}
        <div className="text-center mb-8">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4
            text-gray-900 dark:text-gray-100 transition-colors duration-500"
          >
            {course.title}
          </h2>
          <div className="flex items-center justify-center space-x-2 text-orange-500">
            <Clock className="w-5 h-5" />
            <span className="font-medium text-orange-600 dark:text-orange-400">
              {course.duration}
            </span>
            <Award className="w-5 h-5 ml-4" />
            <span className="font-medium text-orange-600 dark:text-orange-400">
              Placement Assistance
            </span>
          </div>
        </div>

        {/* Module Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {course.modules.map((mod, idx) => (
            <button
              key={idx}
              onClick={() => setActiveModuleIndex(idx)}
              className={`px-4 py-2 rounded-xl font-medium transition-all
                shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff]
                dark:shadow-[8px_8px_16px_rgba(0,0,0,0.6),-8px_-8px_16px_rgba(255,255,255,0.1)]
                ${
                  activeModuleIndex === idx
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }
              `}
            >
              {mod.title}
            </button>
          ))}
        </div>

        {/* Module Content */}
        <div
          className="p-6 bg-white rounded-2xl
            shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff]
            dark:bg-gray-800 dark:shadow-[8px_8px_16px_rgba(0,0,0,0.6),-8px_-8px_16px_rgba(255,255,255,0.1)]
            transition-colors duration-500"
        >
          {course.modules[activeModuleIndex].component}
        </div>
      </div>
    </section>
  );
}
