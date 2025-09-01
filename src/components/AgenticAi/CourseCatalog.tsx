import React, { useState } from 'react';
import { Search, Filter, Star, Users, Clock, Zap, Shield } from 'lucide-react';

interface CourseCatalogProps {
  darkMode: boolean;
  onCourseSelect: (courseId: string) => void;
}

const CourseCatalog: React.FC<CourseCatalogProps> = ({ darkMode, onCourseSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const courses = [
    {
      id: 'agentic-ai',
      title: 'Agentic AI Mastery',
      description: 'Build intelligent systems that think, plan, and act autonomously. Master LangChain, multi-agent architectures, and autonomous decision-making.',
      duration: '12 weeks',
      students: '2,847',
      rating: 4.9,
      price: '$299',
      category: 'AI/ML',
      features: [
        'Autonomous agent architectures',
        'Multi-agent collaboration',
        'Self-improving systems',
        'Real-world deployment'
      ]
    }
  ];

  return (
    <div className={`min-h-screen py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section with Neumorphism */}
        <div className={`text-center mb-16 p-8 rounded-3xl transition-all duration-300 
          ${darkMode 
            ? 'shadow-[10px_10px_20px_#0d1117,-10px_-10px_20px_#1a1d24] bg-gray-900' 
            : 'shadow-[10px_10px_20px_#d3d6db,-10px_-10px_20px_#ffffff] bg-gray-50'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Master the Future of{' '}
            <span className={`bg-gradient-to-r ${darkMode ? 'from-orange-400 to-yellow-400' : 'from-orange-600 to-yellow-500'} bg-clip-text text-transparent`}>
              Artificial Intelligence
            </span>
          </h1>
          <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Transform your career with cutting-edge AI courses designed by industry leaders
          </p>
        </div>

        {/* Search with Neumorphic Design */}
        <div className="flex justify-center mb-16">
          <div className={`relative w-full max-w-2xl p-1 rounded-2xl transition-all duration-300 
            ${darkMode 
              ? 'shadow-[inset_5px_5px_10px_#0d1117,inset_-5px_-5px_10px_#1a1d24] bg-gray-900' 
              : 'shadow-[inset_5px_5px_10px_#d3d6db,inset_-5px_-5px_10px_#ffffff] bg-gray-50'}`}>
            <div className={`relative flex items-center rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <Search size={20} className={`absolute left-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-12 pr-6 py-4 rounded-xl focus:outline-none transition-all duration-200 ${
                  darkMode ? 'bg-gray-800 text-white placeholder-gray-500' : 'bg-white text-gray-900 placeholder-gray-400'
                }`}
              />
              <button className={`absolute right-2 px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 ${
                darkMode 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}>
                <Filter size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Centered Neumorphic Course Card */}
        <div className="flex justify-center mb-20">
          {courses.map((course) => (
            <div 
              key={course.id}
              onClick={() => onCourseSelect(course.id)}
              className={`w-full max-w-md cursor-pointer transform transition-all duration-500 hover:scale-105 
                ${darkMode 
                  ? 'shadow-[15px_15px_30px_#0d1117,-15px_-15px_30px_#1a1d24] bg-gray-800' 
                  : 'shadow-[15px_15px_30px_#d3d6db,-15px_-15px_30px_#ffffff] bg-white'}
                rounded-3xl overflow-hidden border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
            >
              {/* Course Header */}
              <div className={`p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      darkMode ? 'bg-orange-900/30 text-orange-400' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {course.category}
                    </span>
                    <h3 className="text-2xl font-bold mt-3 mb-2 text-gray-900 dark:text-white">{course.title}</h3>
                  </div>
                  <div className={`px-3 py-1 rounded-lg flex items-center ${
                    darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-yellow-50 text-yellow-600'
                  }`}>
                    <Star size={16} className="fill-current mr-1" />
                    <span className="font-bold">{course.rating}</span>
                  </div>
                </div>
                <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{course.description}</p>
              </div>

              {/* Course Features */}
              <div className={`p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What You'll Learn:</h4>
                <ul className="space-y-2">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Zap size={16} className={`flex-shrink-0 mt-1 mr-2 ${darkMode ? 'text-yellow-400' : 'text-orange-500'}`} />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Course Footer */}
              <div className={`p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <div className="flex items-center">
                      <Users size={16} className={`mr-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{course.students}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className={`mr-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{course.duration}</span>
                    </div>
                  </div>
                  <button className={`px-6 py-2 rounded-lg font-bold transition-all duration-200 ${
                    darkMode 
                      ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]' 
                      : 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]'
                  }`}>
                    Enroll Now - {course.price}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Neumorphic Stats Section */}
        <div className={`p-8 rounded-3xl transition-all duration-300 
          ${darkMode 
            ? 'shadow-[10px_10px_20px_#0d1117,-10px_-10px_20px_#1a1d24] bg-gray-900' 
            : 'shadow-[10px_10px_20px_#d3d6db,-10px_-10px_20px_#ffffff] bg-gray-50'}`}>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Why Learn With Brainovision
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '50K+', label: 'Students Trained', icon: Users },
              { number: '98%', label: 'Success Rate', icon: Star },
              { number: '25+', label: 'Expert Instructors', icon: Zap },
              { number: '100+', label: 'Industry Partners', icon: Shield }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl text-center transition-all duration-300 
                  ${darkMode 
                    ? 'shadow-[inset_5px_5px_10px_#0d1117,inset_-5px_-5px_10px_#1a1d24] bg-gray-800 hover:shadow-[inset_7px_7px_14px_#0d1117,inset_-7px_-7px_14px_#1a1d24]' 
                    : 'shadow-[inset_5px_5px_10px_#d3d6db,inset_-5px_-5px_10px_#ffffff] bg-white hover:shadow-[inset_7px_7px_14px_#d3d6db,inset_-7px_-7px_14px_#ffffff]'}`}
              >
                <stat.icon size={32} className={`mx-auto mb-4 ${darkMode ? 'text-yellow-400' : 'text-orange-500'}`} />
                <div className="text-3xl font-bold text-orange-500 dark:text-yellow-400 mb-2">{stat.number}</div>
                <div className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCatalog;