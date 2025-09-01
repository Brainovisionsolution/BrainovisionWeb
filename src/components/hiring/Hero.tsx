import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onViewPositions: () => void;
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ onViewPositions, isDark }) => {
  return (
    <section className={`relative py-20 overflow-hidden transition-all duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-yellow-50 via-white to-orange-50'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: isDark 
            ? `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='7' cy='53' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            : `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='7' cy='53' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 animate-fade-in transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Join Our Team and
            <span className={`${
              isDark ? 'text-yellow-400' : 'text-orange-600'
            }`}> Build the Future</span>
          </h1>
          <p className={`text-xl mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Explore open roles and start your journey with us. Be part of a team that's shaping tomorrow's technology.
          </p>
          <button
            onClick={onViewPositions}
            className={`inline-flex items-center px-8 py-4 font-medium rounded-2xl transition-all duration-300 transform hover:scale-105 ${
              isDark 
                ? 'bg-gray-800 text-yellow-400 shadow-neumorphic-dark hover:shadow-neumorphic-dark-hover' 
                : 'bg-white text-orange-600 shadow-neumorphic-light hover:shadow-neumorphic-light-hover'
            }`}
          >
            View Open Positions
            <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;