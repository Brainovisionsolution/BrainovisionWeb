import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from "@/components/Navigation";
import HeroSection from '../components/DSA/HeroSection';
import AboutSection from '../components/DSA/AboutSection';
import ProgramHighlights from '../components/DSA/ProgramHighlights';
import TargetVision from '../components/DSA/TargetVision';
import RecordMilestone from '../components/DSA/RecordMilestone';
import WhyDSA from '../components/DSA/WhyDSA';
import CareerOpportunities from '../components/DSA/CareerOpportunities';
import ParticipantBenefits from '../components/DSA/ParticipantBenefits';
import HostBenefits from '../components/DSA/HostBenefits';
import GuestPlan from '../components/DSA/GuestPlan';
import IndustryExperts from '../components/DSA/IndustryExperts';
import HostColleges from '../components/DSA/HostColleges';
import RegistrationSection from '../components/DSA/RegistrationSection';
import { Footer } from "@/components/Footer";
import '../index.css';

function Dsabootcamp() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navigation/>
        <HeroSection />
        <AboutSection />
        <ProgramHighlights />
        <TargetVision />
        <RecordMilestone />
        <WhyDSA />
        <CareerOpportunities />
        <ParticipantBenefits/>
        
        <GuestPlan />
        <HostColleges />
        <RegistrationSection />
        <Footer />
      </motion.div>
    </div>
  );
}

export default Dsabootcamp;