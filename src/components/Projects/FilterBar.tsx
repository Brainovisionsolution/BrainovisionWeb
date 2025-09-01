import React from 'react';
import { Filter } from 'lucide-react';

interface FilterBarProps {
  darkMode: boolean;
  selectedCategory: string;
  selectedTech: string;
  selectedYear: string;
  onCategoryChange: (category: string) => void;
  onTechChange: (tech: string) => void;
  onYearChange: (year: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  darkMode,
  selectedCategory,
  selectedTech,
  selectedYear,
  onCategoryChange,
  onTechChange,
  onYearChange
}) => {
  const categories = ['All', 'AI/ML', 'EdTech', 'Web Development', 'Data Analytics', 'HealthTech', 'Blockchain'];
  const technologies = ['All', 'React', 'Node.js', 'Python', 'Next.js', 'MongoDB', 'TensorFlow'];
  const years = ['All', '2024', '2023', '2022'];

  const FilterButton = ({ 
    items, 
    selected, 
    onChange, 
    placeholder 
  }: { 
    items: string[]; 
    selected: string; 
    onChange: (value: string) => void;
    placeholder: string;
  }) => (
    <div className="relative">
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className={`appearance-none px-4 py-3 pr-8 rounded-lg border-none outline-none cursor-pointer font-medium transition-all duration-300 ${
          darkMode 
            ? 'bg-gray-800 text-gray-300 shadow-[inset_3px_3px_6px_#1f2937,inset_-3px_-3px_6px_#374151] hover:shadow-[inset_1px_1px_3px_#1f2937,inset_-1px_-1px_3px_#374151]' 
            : 'bg-white text-gray-700 shadow-[inset_3px_3px_6px_#d1d5db,inset_-3px_-3px_6px_#ffffff] hover:shadow-[inset_1px_1px_3px_#d1d5db,inset_-1px_-1px_3px_#ffffff]'
        }`}
      >
        {items.map((item) => (
          <option key={item} value={item}>
            {item === 'All' ? `${placeholder}` : item}
          </option>
        ))}
      </select>
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <svg className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );

  return (
    <div className={`sticky top-0 z-20 py-6 px-4 backdrop-blur-sm ${
      darkMode ? 'bg-gray-900/80' : 'bg-gray-50/80'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className={`flex items-center gap-4 p-6 rounded-2xl ${
          darkMode 
            ? 'bg-gray-800 shadow-[8px_8px_16px_#1f2937,-8px_-8px_16px_#374151]' 
            : 'bg-white shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff]'
        }`}>
          {/* Filter Icon */}
          <div className={`p-3 rounded-lg ${
            darkMode 
              ? 'bg-gray-700 shadow-[inset_3px_3px_6px_#1f2937,inset_-3px_-3px_6px_#4b5563]' 
              : 'bg-gray-100 shadow-[inset_3px_3px_6px_#d1d5db,inset_-3px_-3px_6px_#ffffff]'
          }`}>
            <Filter className="w-5 h-5 text-orange-500" />
          </div>

          {/* Filter Title */}
          <span className={`font-semibold text-lg hidden sm:block ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Filter Projects:
          </span>

          {/* Filter Controls */}
          <div className="flex flex-wrap gap-4 flex-1 justify-end">
            <FilterButton
              items={categories}
              selected={selectedCategory}
              onChange={onCategoryChange}
              placeholder="All Categories"
            />
            <FilterButton
              items={technologies}
              selected={selectedTech}
              onChange={onTechChange}
              placeholder="All Technologies"
            />
            <FilterButton
              items={years}
              selected={selectedYear}
              onChange={onYearChange}
              placeholder="All Years"
            />
          </div>

          {/* Reset Button */}
          {(selectedCategory !== 'All' || selectedTech !== 'All' || selectedYear !== 'All') && (
            <button
              onClick={() => {
                onCategoryChange('All');
                onTechChange('All');
                onYearChange('All');
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 shadow-[3px_3px_6px_#1f2937,-3px_-3px_6px_#4b5563]' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 shadow-[3px_3px_6px_#d1d5db,-3px_-3px_6px_#ffffff]'
              } hover:shadow-[inset_2px_2px_4px_#d1d5db,inset_-2px_-2px_4px_#ffffff]`}
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;