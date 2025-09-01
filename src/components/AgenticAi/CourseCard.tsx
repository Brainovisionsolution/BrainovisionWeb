import React from 'react';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  students: string;
  rating: number;
  price: string;
  image?: string;
  darkMode: boolean;
  onClick: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  duration,
  students,
  rating,
  price,
  darkMode,
  onClick
}) => {
  return (
    <div 
      onClick={onClick}
      className={`group cursor-pointer p-6 rounded-2xl transition-all duration-300 hover:scale-105 transform ${
        darkMode
          ? 'bg-gray-800 hover:bg-gray-750'
          : 'bg-white hover:bg-gray-50'
      }`}
      style={{
        boxShadow: darkMode 
          ? 'inset 0 1px 0 rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.3)'
          : 'inset 0 1px 0 rgba(255,255,255,0.9), 0 20px 40px rgba(0,0,0,0.1)'
      }}
    >
      {/* Course Image/Icon */}
      <div className={`w-full h-40 rounded-xl mb-6 flex items-center justify-center ${
        darkMode
          ? 'bg-gradient-to-br from-orange-600 to-yellow-600'
          : 'bg-gradient-to-br from-orange-400 to-yellow-400'
      }`}>
        <span className="text-4xl">🤖</span>
      </div>

      {/* Course Info */}
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold group-hover:text-orange-500 transition-colors duration-200">
            {title}
          </h3>
          <ArrowRight 
            size={20} 
            className="text-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1" 
          />
        </div>

        <p className={`text-sm leading-relaxed ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {description}
        </p>

        {/* Course Stats */}
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Clock size={16} className="text-orange-500" />
            <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} className="text-orange-500" />
            <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{students}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-500 fill-current" />
            <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{rating}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
          <span className="text-2xl font-bold text-orange-500">{price}</span>
          <button className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            darkMode
              ? 'bg-orange-600 text-white hover:bg-orange-700'
              : 'bg-orange-500 text-white hover:bg-orange-600'
          }`}>
            View Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;