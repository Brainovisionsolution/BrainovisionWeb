import React from 'react';
import { Users, MessageCircle } from 'lucide-react';

interface HeroSectionProps {
  isDarkMode: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isDarkMode }) => {
  const cardClasses = isDarkMode
    ? 'bg-gray-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3)]'
    : 'bg-white shadow-[inset_0_2px_4px_rgba(251,146,60,0.1),inset_0_-2px_4px_rgba(252,211,77,0.1),0_8px_32px_rgba(251,146,60,0.2)]';

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className={`p-4 rounded-2xl ${cardClasses} transition-all duration-300`}>
              <MessageCircle className="w-12 h-12 text-orange-500" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
            Get in Touch with Our Team
          </h1>
          
          <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            We're here to answer your questions, discuss projects, or explore opportunities. 
            Let's start a conversation that could transform your business.
          </p>

          {/* Team Photo Placeholder */}
          <div className={`max-w-2xl mx-auto p-8 rounded-3xl ${cardClasses} transition-all duration-300`}>
            <div className="flex justify-center items-center space-x-4 mb-4">
              <Users className="w-8 h-8 text-orange-500" />
              <span className={`text-lg font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                Our Professional Team
              </span>
            </div>
            <div className={`h-48 rounded-2xl flex items-center justify-center ${
              isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-orange-100 to-yellow-100'
            }`}>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Professional team photo would go here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};