import React, { useState, useEffect, useMemo } from 'react';
import { Navigation } from "@/components/Navigation";
import Hero from "@/components/hiring/Hero";
import SearchFilter from "@/components/hiring/SearchFilter";
import JobListing from "@/components/hiring/JobListing";
import JobModal from "@/components/hiring/JobModal";
import WhyWorkWithUs from "@/components/hiring/WhyWorkWithUs";
import Testimonials from "@/components/hiring/Testimonials";
import OfficeGallery from "@/components/hiring/OfficeGallery";
import Contact from "@/components/hiring/Contact";
import { jobs } from "@/components/hiring/data/jobs";
import { Footer } from "@/components/Footer";

function HiringSolutions() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedJobType, setSelectedJobType] = useState('');

  // Theme persistence
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Filtered jobs based on search and filters
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDepartment = !selectedDepartment || job.department === selectedDepartment;
      const matchesLocation = !selectedLocation || job.location === selectedLocation;
      const matchesJobType = !selectedJobType || job.type === selectedJobType;

      return matchesSearch && matchesDepartment && matchesLocation && matchesJobType;
    });
  }, [searchTerm, selectedDepartment, selectedLocation, selectedJobType]);

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
    setIsModalOpen(false);
  };

  const scrollToSearch = () => {
    document.getElementById('search-section')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <Navigation />

      <Hero onViewPositions={scrollToSearch} isDark={isDark} />

      <SearchFilter
        isDark={isDark}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        selectedJobType={selectedJobType}
        setSelectedJobType={setSelectedJobType}
      />

      <JobListing jobs={filteredJobs} onJobClick={handleJobClick} isDark={isDark} />

      <WhyWorkWithUs isDark={isDark} />

      <Testimonials isDark={isDark} />

      <OfficeGallery isDark={isDark} />

      <Contact isDark={isDark} />

      <Footer />

      <JobModal job={selectedJob} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default HiringSolutions;
