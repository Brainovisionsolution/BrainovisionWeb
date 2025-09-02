import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ThemeProvider } from "@/components/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ChatbotWidget from "./components/ChatbotWidget";
import SplashScreen from "./components/SplashScreen";

/* Pages under construction */
import About from "./pages/About";
import Bootcamps from "./pages/Bootcamp";
import EventsAndAwards from "./pages/EventsAndAwards";
import CareerAndHiring from "./pages/CareerAndHiring";
import Galleryy from "./pages/Gallery";
import JobOriented from "./pages/JobOriented";
import ContactUs from "./pages/ContactUs";
import Projectss from "./pages/Projects";
import Courses from "./pages/Courses";
import Edtech from "./pages/Edtech";
import Workshops from "./pages/Workshops";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import HiringSolutions from "./pages/HiringSolutions";
import Studentcourses from "./pages/Studentcourses";
import AgenticAi from "./pages/AgentiAi";
import WorkingProfessionals from "./pages/WorkingProfessionals";
import Dsabootcamp from "./pages/Dsabootcamp";

/* React Query client */
const queryClient = new QueryClient();

// Wrapper to handle splash only on home page
const AppWrapper = () => {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // Show splash only for home page
    if (location.pathname === "/") {
      setShowSplash(true);
      const done = () => setShowSplash(false);
      window.addEventListener("BV_SPLASH_DONE", done);
      const fallback = setTimeout(done, 3500);
      return () => {
        window.removeEventListener("BV_SPLASH_DONE", done);
        clearTimeout(fallback);
      };
    }
  }, [location.pathname]);

  if (showSplash) return <SplashScreen />;

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/bootcamps" element={<Bootcamps />} />
        <Route
          path="/internships"
          element={<Navigate to="https://internship.brainovision.in" replace />}
        />
        <Route
          path="/bootcamps"
          element={<Navigate to="https://techedge.brainovision.in" replace />}
        />
        <Route path="/eventsandawards" element={<EventsAndAwards />} />
        <Route path="/careerandhiring" element={<CareerAndHiring />} />
        <Route path="/gallery" element={<Galleryy />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/projects" element={<Projectss />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/edtech" element={<Edtech />} />
        <Route path="/joboriented" element={<JobOriented />} />
        <Route path="/StudentCourse" element={<Studentcourses />} />
        <Route path="/softwaredevelopment" element={<SoftwareDevelopment />} />
        <Route path="/hiringsolutions" element={<HiringSolutions />} />
        <Route path="/WorkingProfessionals" element={<WorkingProfessionals />} />
        <Route path="/courses/AgenticAi" element={<AgenticAi />} />
        <Route path="/workshopsAndHackathons/*" element={<Workshops />} />
        <Route path="/dsa-deeptech" element={<Dsabootcamp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />

          <BrowserRouter>
            <AppWrapper />
          </BrowserRouter>

        
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
