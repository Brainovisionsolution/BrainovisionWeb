import React from 'react';
import { Search, Filter } from 'lucide-react';

interface SearchFilterProps {
  isDark: boolean;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedDepartment: string;
  setSelectedDepartment: (dept: string) => void;
  selectedLocation: string;
  setSelectedLocation: (loc: string) => void;
  selectedJobType: string;
  setSelectedJobType: (type: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  isDark,
  searchTerm,
  setSearchTerm,
  selectedDepartment,
  setSelectedDepartment,
  selectedLocation,
  setSelectedLocation,
  selectedJobType,
  setSelectedJobType,
}) => {
  return (
    <section className={`py-12 border-b transition-all duration-300 ${
      isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-100 border-gray-200'
    }`} id="search-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Find Your Perfect Role</h2>
          <p className={`transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>Use filters to narrow down positions that match your interests</p>
        </div>

        {/* Search Bar */}
        <div className={`relative mb-6 rounded-2xl transition-all duration-300 ${
          isDark ? 'shadow-inner-dark' : 'shadow-inner-light'
        }`}>
          <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`} size={20} />
          <input
            type="text"
            placeholder="Search roles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-12 pr-4 py-4 rounded-2xl border-none outline-none transition-all duration-300 ${
              isDark 
                ? 'bg-gray-800 text-white placeholder-gray-400 shadow-inner-dark focus:shadow-inner-dark-focus' 
                : 'bg-white text-gray-900 placeholder-gray-500 shadow-inner-light focus:shadow-inner-light-focus'
            }`}
          />
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className={`block text-sm font-medium mb-3 transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>Department</label>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className={`w-full px-4 py-3 rounded-2xl border-none outline-none transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-800 text-white shadow-neumorphic-dark focus:shadow-neumorphic-dark-inset' 
                  : 'bg-white text-gray-900 shadow-neumorphic-light focus:shadow-neumorphic-light-inset'
              }`}
            >
              <option value="">All Departments</option>
              <option value="Engineering">Engineering</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
              <option value="HR">HR</option>
            </select>
          </div>

          <div>
            <label className={`block text-sm font-medium mb-3 transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>Location</label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className={`w-full px-4 py-3 rounded-2xl border-none outline-none transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-800 text-white shadow-neumorphic-dark focus:shadow-neumorphic-dark-inset' 
                  : 'bg-white text-gray-900 shadow-neumorphic-light focus:shadow-neumorphic-light-inset'
              }`}
            >
              <option value="">All Locations</option>
              <option value="Remote">Remote</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Mumbai">Mumbai</option>
            </select>
          </div>

          <div>
            <label className={`block text-sm font-medium mb-3 transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>Job Type</label>
            <select
              value={selectedJobType}
              onChange={(e) => setSelectedJobType(e.target.value)}
              className={`w-full px-4 py-3 rounded-2xl border-none outline-none transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-800 text-white shadow-neumorphic-dark focus:shadow-neumorphic-dark-inset' 
                  : 'bg-white text-gray-900 shadow-neumorphic-light focus:shadow-neumorphic-light-inset'
              }`}
            >
              <option value="">All Types</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Internship">Internship</option>
              <option value="Contract">Contract</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;