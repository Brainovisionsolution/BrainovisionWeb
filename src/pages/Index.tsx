import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sections
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { Collabs } from "@/components/Collabs";
import TechnologiesSection from "@/components/TechnologiesSection";

import ProgramBlocks from "@/components/ProgramBlocks";
import { WhyBrainovisionSection } from "@/components/WhyBrainovisionSection";
import { TrainingProcessSection } from "@/components/TrainingProcessSection";
import { DevelopmentProcessSection } from "@/components/DevelopmentProcessSection";
import { StatsSection } from "@/components/StatsSection";
import CollaborationsSection from "@/components/CollaborationsSection";
import { EventsSection } from "@/components/EventsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import RotatingHiringCompanies from "@/components/JobGrauntedcourses/HiringCompanies";
import { FAQSection } from "@/components/FAQSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Show scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trigger popup modal when #about section is in view
  useEffect(() => {
    const aboutSection = document.getElementById("about");
    if (!aboutSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowModal(true);
          observer.disconnect(); // show only once
        }
      },
      { root: null, threshold: 0.5 }
    );

    observer.observe(aboutSection);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white">
      {/* Navigation */}
      <Navigation />
      <HeroSection />
      <AboutSection />
      <Collabs />
      <TechnologiesSection />
      <ProgramBlocks />
      <WhyBrainovisionSection />
      <TrainingProcessSection />
      <DevelopmentProcessSection />
      <StatsSection />
      <CollaborationsSection />
      <EventsSection />
      <ProjectsSection />
    <RotatingHiringCompanies/>
      <TestimonialsSection />
      <FAQSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />

      {/* Scroll To Top Button */}
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

export default Index;
