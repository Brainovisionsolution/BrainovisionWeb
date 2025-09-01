import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Navigation } from "@/components/Navigation";


import Hero from "@/components/Projects/Hero";
import FilterBar from "@/components/Projects/FilterBar";
import ProjectsGrid from "@/components/Projects/ProjectsGrid";
import TestimonialsSection from "@/components/Projects/TestimonialsSection";
import CTASection from "@/components/Projects/CTASection";
import { Footer } from "@/components/Footer";
const Projects: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTech, setSelectedTech] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-6 right-6 z-50 p-4 rounded-full transition-all duration-300 transform hover:scale-110 ${
          darkMode 
            ? 'bg-gray-800 text-yellow-400 shadow-[8px_8px_16px_#1f2937,-8px_-8px_16px_#374151] hover:shadow-[inset_4px_4px_8px_#1f2937,inset_-4px_-4px_8px_#374151]' 
            : 'bg-white text-orange-500 shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#d1d5db,inset_-4px_-4px_8px_#ffffff]'
        }`}
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>
 <Navigation/>
      {/* Hero Section */}
      <Hero darkMode={darkMode} />

      {/* Filter Bar */}
      <FilterBar
        darkMode={darkMode}
        selectedCategory={selectedCategory}
        selectedTech={selectedTech}
        selectedYear={selectedYear}
        onCategoryChange={setSelectedCategory}
        onTechChange={setSelectedTech}
        onYearChange={setSelectedYear}
      />

      {/* Projects Grid */}
      <ProjectsGrid
        darkMode={darkMode}
        selectedCategory={selectedCategory}
        selectedTech={selectedTech}
        selectedYear={selectedYear}
      />

      {/* Testimonials Section */}
      <TestimonialsSection darkMode={darkMode} />

      {/* CTA Section */}
      <CTASection darkMode={darkMode} />
      <Footer/>
    </div>
  );
};

export default Projects;