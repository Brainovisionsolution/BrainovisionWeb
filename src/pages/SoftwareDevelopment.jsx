import React from 'react';
import { useTheme } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import Hero from "../components/development/Hero";
import Services from "../components/development/Services";
import Process from "../components/development/Process";
import Technologies from "../components/development/Technologies";
import Team from "../components/development/Team";
import CaseStudies from "../components/development/CaseStudies";
import WhyChooseUs from "../components/development/WhyChooseUs";
import Testimonials from "../components/development/Testimonials";
import {ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

function SoftwareDevelopment() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Process />
        <Technologies />
       
        <CaseStudies />
        <WhyChooseUs />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default SoftwareDevelopment;
