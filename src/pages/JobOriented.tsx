import React from 'react';

import { Navigation } from '@/components/Navigation';
import Hero from '@/components/JobGrauntedcourses/Hero';
import WhyChoose from '@/components/JobGrauntedcourses/WhyChoose';
import Courses from '@/components/JobGrauntedcourses/Courses';
import SuccessWall from '@/components/JobGrauntedcourses/SuccessWall';
import Team from '@/components/courses/Team';
import HiringCompanies from '@/components/JobGrauntedcourses/HiringCompanies';
import CertificationSection from '@/components/JobGrauntedcourses/CertificationSection';
import FAQ from '@/components/JobGrauntedcourses/FAQ';
import { Footer } from '@/components/Footer';

function JobOriented() {
  return (
   
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation/>
        <Hero />
        <WhyChoose />
        <Courses />
        
        <SuccessWall />
<Team/>
        <HiringCompanies/>
        <CertificationSection/>
        <FAQ />
        <Footer />
      </div>
    
  );
}

export default JobOriented;