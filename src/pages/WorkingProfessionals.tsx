import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import Hero from '@/components/WorkingProfessinalcourses/Hero';
import WhyThisCourse from '@/components/WorkingProfessinalcourses/WhyThisCourse';
import Programs from '@/components/WorkingProfessinalcourses/Programs';
import CourseHighlights from '@/components/WorkingProfessinalcourses/CourseHighlights';
import Team from '@/components/courses/Team';
import Flexibility from '@/components/WorkingProfessinalcourses/Flexibility';
import RotatingHiringCompanies from '@/components/JobGrauntedcourses/HiringCompanies';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { Moon, Sun } from 'lucide-react';

function WorkingProfessionals() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Dark mode toggle button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
          darkMode
            ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
            : 'bg-white text-orange-500 hover:bg-gray-50 shadow-lg'
        }`}
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      <Navigation />

      {/* Hero receives darkMode prop */}
      <Hero darkMode={darkMode} />

      {/* Rest of the page stays normal */}
      <WhyThisCourse />
      <Programs />
      <CourseHighlights />
      <Team />
      <Flexibility />
      <RotatingHiringCompanies />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default WorkingProfessionals;
