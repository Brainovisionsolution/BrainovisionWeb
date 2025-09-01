import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`
        relative w-14 h-8 rounded-full transition-all duration-300 focus:outline-none
        ${isDark 
          ? 'bg-gray-700 shadow-inner-dark' 
          : 'bg-gray-200 shadow-inner-light'
        }
      `}
    >
      <div
        className={`
          absolute top-1 w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center
          ${isDark 
            ? 'left-7 bg-gray-800 shadow-neumorphic-dark' 
            : 'left-1 bg-white shadow-neumorphic-light'
          }
        `}
      >
        {isDark ? (
          <Moon size={12} className="text-yellow-400" />
        ) : (
          <Sun size={12} className="text-orange-500" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;