// src/pages/Courses.jsx

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

// Global Nav
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

// Course Page Sections
import Hero from "@/components/courses/Hero";
import ProgramDetails from "@/components/courses/ProgramDetails";
import Accreditation from "@/components/courses/Accreditiation";
import Awards from "@/components/courses/Awards";
import Team from "@/components/courses/Team";
import WhyCompanies from "@/components/courses/WhyCompanies";
import RotatingHiringCompanies from "@/components/JobGrauntedcourses/HiringCompanies";
import StudentsReviewsPage from "@/components/courses/StudentsReviewsPage";

import { useTheme } from "@/components/ThemeProvider";

const Courses = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-br from-yellow-50 via-white to-amber-50 text-gray-900"
      }`}
    >
      {/* Navigation */}
      <Navigation />
{/* Program Details */}
      <ProgramDetails/>
      {/* Hero Section */}
      <Hero  darkMode={isDark}/>

      

      {/* Accreditation */}
      <Accreditation darkMode={isDark} />

      {/* Awards & Recognition */}
      <Awards darkMode={isDark} />

      {/* Trainers Section */}
      <Team darkMode={isDark} />

      {/* Industry Why Companies Trust */}
      <WhyCompanies darkMode={isDark} />
<RotatingHiringCompanies/>
<StudentsReviewsPage/>
      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 rounded-full w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 shadow-xl transition-all duration-300 hover:scale-110 border-2 border-white dark:border-gray-800"
          size="icon"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </Button>
      )}
    </div>
  );
};

export default Courses;
