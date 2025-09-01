import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

// Global Nav
import { Navigation } from "@/components/Navigation";

// ✅ Courses Page Sections
import Hero from "@/components/Studentcourses/Hero";
import Modal from "@/components/Studentcourses/Modal"; // <-- your updated modal
import Courses from "@/components/Studentcourses/Courses";
import WhyBrainovision from "@/components/Studentcourses/WhyBrainovision";
import Team from "@/components/courses/Team";
import Roadmap from "@/components/Studentcourses/Roadmap";
import RotatingHiringCompanies from "@/components/JobGrauntedcourses/HiringCompanies";
import StudentsReviewsPage from "@/components/courses/StudentsReviewsPage";
import Certification from "@/components/Studentcourses/Certification";
import Pricing from "@/components/Studentcourses/Pricing";
import FAQ from "@/components/Studentcourses/FAQ";
import { Footer } from "@/components/Footer";
// Optional: Global Offer Popup
import PopupModal from "@/components/PopupModal";

const Studentcourses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Global Navigation */}
      <Navigation />

      {/* Hero Section with CTA */}
      <Hero onOpenModal={() => setIsModalOpen(true)} />

      {/* Optional Popup Banner / Deals */}
      <PopupModal />

      {/* Courses Grid */}
      <Courses onOpenModal={() => setIsModalOpen(true)} />

      {/* Why Choose Brainovision */}
      <WhyBrainovision />

      {/* Trainers / Mentors */}
    <Team/>
      {/* Roadmap */}
      <Roadmap />

      {/* Trusted Companies */}
   <RotatingHiringCompanies/>
      {/* Testimonials */}
<StudentsReviewsPage/>

      {/* Certification */}
      <Certification />

      {/* Pricing Plans */}
      

      {/* Frequently Asked Questions */}
      <FAQ />
<Footer/>
      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 rounded-full w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 shadow-xl transition-all duration-300 hover:scale-110 border-2 border-white dark:border-gray-800"
          size="icon"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </Button>
      )}

      {/* Modal (Demo / Enroll / Scholarship) */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} type="demo" />
    </div>
  );
};

export default Studentcourses;
