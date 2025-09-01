import React from 'react';
import { Play, Calendar, Users, Clock } from 'lucide-react';

interface MasterclassesProps {
  darkMode: boolean;
}

const Masterclasses: React.FC<MasterclassesProps> = ({ darkMode }) => {
  const masterclasses = [
    {
      title: 'System Design Fundamentals',
      company: 'Google',
      instructor: 'Senior Staff Engineer at Google',
      duration: '2 hours',
      attendees: '2,500+',
      date: 'Dec 15, 2024',
      description: 'Learn how to design scalable systems from a Google expert',
      thumbnail: true
    },
    {
      title: 'Machine Learning at Scale',
      company: 'Microsoft',
      instructor: 'Principal Data Scientist at Microsoft',
      duration: '3 hours',
      attendees: '1,800+',
      date: 'Dec 20, 2024',
      description: 'Deep dive into ML operations and production systems',
      thumbnail: true
    },
    {
      title: 'Product Strategy & Vision',
      company: 'Meta',
      instructor: 'VP of Product at Meta',
      duration: '1.5 hours',
      attendees: '3,200+',
      date: 'Dec 25, 2024',
      description: 'Building products that users love and businesses need',
      thumbnail: true
    },
    {
      title: 'Cloud Architecture Patterns',
      company: 'Amazon',
      instructor: 'Solutions Architect at AWS',
      duration: '2.5 hours',
      attendees: '2,100+',
      date: 'Jan 5, 2025',
      description: 'Best practices for cloud-native application design',
      thumbnail: true
    }
  ];

  const communityStats = [
    { label: 'Active Learners', value: '50,000+' },
    { label: 'Live Sessions', value: '200+' },
    { label: 'Community Projects', value: '1,500+' },
    { label: 'Expert Mentors', value: '150+' }
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Exclusive Masterclasses & Community
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Learn from industry leaders and connect with a thriving community of learners
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <div key={index} className={`p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 ${
              darkMode 
                ? 'bg-gray-800 shadow-dark-neumorphism' 
                : 'bg-white shadow-neumorphism'
            }`}>
              <div className={`text-3xl font-bold mb-2 ${
                darkMode ? 'text-yellow-400' : 'text-orange-500'
              }`}>
                {stat.value}
              </div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Masterclasses Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {masterclasses.map((masterclass, index) => (
            <div key={index} className={`group overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105 ${
              darkMode 
                ? 'bg-gray-800 shadow-dark-neumorphism hover:shadow-dark-neumorphism-hover' 
                : 'bg-white shadow-neumorphism hover:shadow-neumorphism-hover'
            }`}>
              {/* Thumbnail */}
              <div className={`relative h-48 flex items-center justify-center ${
                darkMode ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  index % 4 === 0 ? 'from-blue-500/20 to-purple-500/20' :
                  index % 4 === 1 ? 'from-green-500/20 to-blue-500/20' :
                  index % 4 === 2 ? 'from-orange-500/20 to-red-500/20' :
                  'from-yellow-500/20 to-orange-500/20'
                }`}></div>
                
                <button className={`relative z-10 p-6 rounded-full transition-all duration-300 group-hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-800/80 text-yellow-400 shadow-dark-neumorphism' 
                    : 'bg-white/80 text-orange-500 shadow-neumorphism'
                } backdrop-blur-sm`}>
                  <Play className="h-12 w-12" />
                </button>

                {/* Company Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold ${
                  index % 4 === 0 ? 'bg-blue-500 text-white' :
                  index % 4 === 1 ? 'bg-green-500 text-white' :
                  index % 4 === 2 ? 'bg-blue-600 text-white' :
                  'bg-orange-500 text-white'
                }`}>
                  {masterclass.company}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {masterclass.title}
                </h3>
                
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {masterclass.description}
                </p>

                <div className={`text-sm mb-4 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  by {masterclass.instructor}
                </div>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className={`flex items-center space-x-1 text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <Clock className="h-4 w-4" />
                    <span>{masterclass.duration}</span>
                  </div>
                  <div className={`flex items-center space-x-1 text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <Users className="h-4 w-4" />
                    <span>{masterclass.attendees}</span>
                  </div>
                  <div className={`flex items-center space-x-1 text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <Calendar className="h-4 w-4" />
                    <span>{masterclass.date}</span>
                  </div>
                </div>

                <button className={`w-full py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 shadow-dark-neumorphism' 
                    : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-neumorphism-hover'
                }`}>
                  Join Masterclass
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Masterclasses;