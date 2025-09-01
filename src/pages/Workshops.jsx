import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '../components/ThemeProvider';

import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

import ProposalForm from '../components/Workshops/ProposalForm';
import Events from '../components/Workshops/Events';
import UpcomingEvents from '../components/Workshops/UpcomingEvents';

// HomePage section components
import Hero from '../components/Workshops/Hero';
import WorkshopBenefits from '../components/Workshops/WorkshopBenefits';
import HackathonBenefits from '../components/Workshops/HackathonBenefits';
import WorkshopProcess from '../components/Workshops/WorkshopProcess';
import HackathonProcess from '../components/Workshops/HackathonProcess';
import ParticipationModes from '../components/Workshops/ParticipationModes';
import PastHighlights from '../components/Workshops/PastHighlights';
import CollaborationsSection from '../components/CollaborationsSection';
import Team from '../components/courses/Team';
import WinnerShowcases from '../components/Workshops/WinnerShowcases';
import Testimonials from '../components/Workshops/Testimonials';
import NewsletterSignup from '../components/Workshops/NewsletterSignup';

function Workshops() {
  const HomePage = () => (
    <main>
      <Hero />
      <UpcomingEvents />
      <WorkshopBenefits />
      <HackathonBenefits />
      <WorkshopProcess />
      <HackathonProcess />
      <ParticipationModes />
      <PastHighlights />
      <CollaborationsSection/>
    <Team/>
      <WinnerShowcases />
      <Testimonials />
  
      <NewsletterSignup />
    </main>
  );

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background-white dark:bg-dark-bg font-poppins">
        <Navigation />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="proposal" element={<ProposalForm />} />
          <Route path="events" element={<UpcomingEvents />} />
          <Route path="allevents" element={<Events />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Workshops;
