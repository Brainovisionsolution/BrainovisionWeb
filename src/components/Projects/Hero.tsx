import React from 'react';
import { Rocket, Code, Zap } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section className={`relative py-20 px-4 overflow-hidden ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 animate-ping"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Main heading */}
        <div className={`inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full ${
          darkMode 
            ? 'bg-gray-800 shadow-[inset_5px_5px_10px_#1f2937,inset_-5px_-5px_10px_#374151]' 
            : 'bg-gray-50 shadow-[inset_5px_5px_10px_#d1d5db,inset_-5px_-5px_10px_#ffffff]'
        }`}>
          <Rocket className="w-6 h-6 text-orange-500" />
          <span className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Our Portfolio
          </span>
        </div>

        <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Our <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>

        <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Take a look at our latest innovations, collaborations, and client success stories. 
          Each project represents our commitment to excellence and cutting-edge technology.
        </p>

        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {[
            { icon: Code, label: '50+ Projects' },
            { icon: Zap, label: '100% Success Rate' },
            { icon: Rocket, label: 'Award Winning' }
          ].map(({ icon: Icon, label }, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                darkMode 
                  ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' 
                  : 'bg-white shadow-[5px_5px_10px_#d1d5db,-5px_-5px_10px_#ffffff]'
              } hover:shadow-[inset_2px_2px_5px_#d1d5db,inset_-2px_-2px_5px_#ffffff] transition-all duration-300`}
            >
              <Icon className="w-5 h-5 text-orange-500" />
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className={`group relative px-8 py-4 rounded-xl text-white font-semibold text-lg 
          bg-gradient-to-r from-orange-500 to-yellow-500 
          shadow-[5px_5px_15px_rgba(255,140,0,0.4),-5px_-5px_15px_rgba(255,215,0,0.4)]
          hover:shadow-[inset_5px_5px_15px_rgba(255,140,0,0.2),inset_-5px_-5px_15px_rgba(255,215,0,0.2)]
          transform hover:scale-105 transition-all duration-300`}>
          <span className="relative z-10">Start Your Project With Us</span>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </section>
  );
};

export default Hero;