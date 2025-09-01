import React from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {ContactSection} from "@/components/ContactSection"

function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <Navigation />
      <ContactSection/>
      <Footer />
    </div>
  );
}

export default ContactUsPage;
