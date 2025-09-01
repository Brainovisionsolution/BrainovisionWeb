import React, { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import CourseCatalog from '@/components/AgenticAi/CourseCatalog';
import CourseDetails from '@/components/AgenticAi/CourseDetails';
import { Footer } from '@/components/Footer';
function AgenticAi() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentView, setCurrentView] = useState<'catalog' | 'course'>('catalog');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  const handleCourseSelect = (courseId: string) => {
    setSelectedCourseId(courseId);
    setCurrentView('course');
  };

  const handleBackToCatalog = () => {
    setCurrentView('catalog');
    setSelectedCourseId(null);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <Navigation/>
      
      {currentView === 'catalog' ? (
        <CourseCatalog 
          darkMode={darkMode} 
          onCourseSelect={handleCourseSelect}
        />
      ) : (
        <CourseDetails 
          onBack={handleBackToCatalog}
          darkMode={darkMode}
        />
        
      )}
      <Footer/>
    </div>
  );
}

export default AgenticAi;