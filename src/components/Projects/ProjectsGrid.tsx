import React, { useState, useMemo } from 'react';
import { Search, Grid, List } from 'lucide-react';
import {projects} from "@/components/Projects/data/projects";
import ProjectCard from './ProjectCard';

interface ProjectsGridProps {
  darkMode: boolean;
  selectedCategory: string;
  selectedTech: string;
  selectedYear: string;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  darkMode,
  selectedCategory,
  selectedTech,
  selectedYear
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesTech = selectedTech === 'All' || project.tech.includes(selectedTech);
      const matchesYear = selectedYear === 'All' || project.year === selectedYear;

      return matchesSearch && matchesCategory && matchesTech && matchesYear;
    });
  }, [searchTerm, selectedCategory, selectedTech, selectedYear]);

  return (
    <section className={`py-16 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Search and View Controls */}
        <div className={`flex flex-col md:flex-row gap-4 mb-12 p-6 rounded-2xl ${
          darkMode 
            ? 'bg-gray-800 shadow-[8px_8px_16px_#1f2937,-8px_-8px_16px_#374151]' 
            : 'bg-white shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff]'
        }`}>
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <input
              type="text"
              placeholder="Search projects, technologies, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-12 pr-4 py-4 rounded-xl border-none outline-none font-medium transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-700 text-gray-300 placeholder-gray-500 shadow-[inset_3px_3px_6px_#1f2937,inset_-3px_-3px_6px_#4b5563] focus:shadow-[inset_1px_1px_3px_#1f2937,inset_-1px_-1px_3px_#4b5563]' 
                  : 'bg-gray-100 text-gray-700 placeholder-gray-500 shadow-[inset_3px_3px_6px_#d1d5db,inset_-3px_-3px_6px_#ffffff] focus:shadow-[inset_1px_1px_3px_#d1d5db,inset_-1px_-1px_3px_#ffffff]'
              }`}
            />
          </div>

          {/* View Mode Toggle */}
          <div className={`flex rounded-xl p-1 ${
            darkMode 
              ? 'bg-gray-700 shadow-[inset_3px_3px_6px_#1f2937,inset_-3px_-3px_6px_#4b5563]' 
              : 'bg-gray-100 shadow-[inset_3px_3px_6px_#d1d5db,inset_-3px_-3px_6px_#ffffff]'
          }`}>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 rounded-lg transition-all duration-300 ${
                viewMode === 'grid'
                  ? `bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg`
                  : `${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'}`
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 rounded-lg transition-all duration-300 ${
                viewMode === 'list'
                  ? `bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg`
                  : `${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'}`
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Showing{' '}
            <span className="font-semibold text-orange-500">{filteredProjects.length}</span>
            {' '}of{' '}
            <span className="font-semibold text-orange-500">{projects.length}</span>
            {' '}projects
            {(selectedCategory !== 'All' || selectedTech !== 'All' || selectedYear !== 'All' || searchTerm) && (
              <span>
                {' '}matching your criteria
              </span>
            )}
          </p>
        </div>

        {/* Projects Grid/List */}
        {filteredProjects.length > 0 ? (
          <div className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'space-y-6'
          }>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                darkMode={darkMode}
              />
            ))}
          </div>
        ) : (
          <div className={`text-center py-20 px-8 rounded-2xl ${
            darkMode 
              ? 'bg-gray-800 shadow-[15px_15px_30px_#1f2937,-15px_-15px_30px_#374151]' 
              : 'bg-white shadow-[15px_15px_30px_#d1d5db,-15px_-15px_30px_#ffffff]'
          }`}>
            <div className={`w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center ${
              darkMode 
                ? 'bg-gray-700 shadow-[inset_5px_5px_10px_#1f2937,inset_-5px_-5px_10px_#4b5563]' 
                : 'bg-gray-100 shadow-[inset_5px_5px_10px_#d1d5db,inset_-5px_-5px_10px_#ffffff]'
            }`}>
              <Search className={`w-12 h-12 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
            </div>
            
            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              No Projects Found
            </h3>
            
            <p className={`text-lg mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              We couldn't find any projects matching your current filters.
            </p>

            <button
              onClick={() => {
                setSearchTerm('');
                // Reset filters would need to be handled by parent component
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                darkMode 
                  ? 'bg-gradient-to-r from-orange-600 to-yellow-600 text-white shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#4b5563]' 
                  : 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-[5px_5px_10px_#d1d5db,-5px_-5px_10px_#ffffff]'
              } hover:shadow-lg`}
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;