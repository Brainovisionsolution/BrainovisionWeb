import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

// Typewriter effect
const useTypewriter = (text: string, speed = 70, start = true) => {
  const [displayed, setDisplayed] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!start || i >= text.length) return;
    const timeout = setTimeout(() => {
      setDisplayed((prev) => prev + text[i]);
      setI(i + 1);
    }, speed);
    return () => clearTimeout(timeout);
  }, [i, text, speed, start]);

  return displayed;
};

const images = [
  "/collegelogos/Brainovision1.jpg",
  "/collegelogos/Brainovision2.jpg",
  "/collegelogos/Brainovision4.png",
];

export const HeroSection = () => {
  const [startSecondLine, setStartSecondLine] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const typedMain = useTypewriter("Building India's DeepTech Innovators", 70, true);
  const typedSub = useTypewriter("Fueling Disruptive Tech Leadership", 80, startSecondLine);

  useEffect(() => {
    if (typedMain === "Building India's DeepTech Innovators") {
      const delay = setTimeout(() => setStartSecondLine(true), 300);
      return () => clearTimeout(delay);
    }
  }, [typedMain]);

  // Slider autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen w-full flex items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white px-4 md:px-6 transition-colors duration-500 overflow-hidden">
      {/* Subtle glow background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-orange-400/10 dark:bg-orange-600/20 blur-[160px] md:blur-[200px] rounded-full -top-20 md:-top-40 -left-20 md:-left-40" />
        <div className="absolute w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-yellow-400/10 dark:bg-yellow-500/20 blur-[140px] md:blur-[180px] rounded-full bottom-0 right-0" />
      </div>

      {/* Grid content */}
      <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center max-w-7xl w-full py-12 md:py-0">
        {/* Text Section */}
        <motion.div
          className="space-y-6 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 md:px-4 py-1.5 rounded-full text-xs font-semibold shadow-md tracking-wide">
              🔥 Transforming Talent into Tech Titans
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight drop-shadow-sm">
            {typedMain}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400">
              {typedSub}
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
            We are{" "}
            <span className="font-semibold text-yellow-600 dark:text-yellow-400">
              Brainovision
            </span>
            , shaping the next generation of{" "}
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              innovators, entrepreneurs, and leaders
            </span>{" "}
            through immersive learning, deeptech projects, and impactful mentorship.
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {[
              { href: "/softwaredevelopment", label: "Services", color: "text-yellow-600 dark:text-yellow-400" },
              { href: "/courses", label: "Courses", color: "text-orange-500 dark:text-orange-400" },
              { href: "https://internships.brainovision.in", label: "Internship", color: "text-gray-700 dark:text-gray-300" },
            ].map((btn, i) => (
              <a key={i} href={btn.href}>
                <div
                  className={`px-4 py-2 rounded-lg text-sm bg-white dark:bg-gray-800 shadow-neu hover:scale-105 hover:shadow-neu-inset transition-all duration-300 font-medium ${btn.color}`}
                >
                  {btn.label}
                </div>
              </a>
            ))}
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-6">
            {[
              { number: "50K+", label: "Students" },
              { number: "200+", label: "Colleges" },
              { number: "100+", label: "Hackathons" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-2 sm:p-3 rounded-xl bg-white dark:bg-gray-800 shadow-neu"
              >
                <p className="text-lg sm:text-xl md:text-2xl font-extrabold text-yellow-500 dark:text-yellow-400">
                  {stat.number}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image Carousel */}
        <motion.div
          className="w-full h-[16rem] sm:h-[22rem] md:h-[26rem] rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-neu border border-orange-200 dark:border-orange-500 relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Brainovision"
            className="object-cover w-full h-full"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-orange-500 dark:bg-orange-400 scale-125"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Icon */}
      <a
        href="#about"
        className="absolute bottom-6 right-6 animate-bounce z-20"
      >
        <div className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-neu border border-orange-300 dark:border-orange-500 hover:scale-110 transition">
          <ArrowDown className="text-orange-500 dark:text-orange-400 w-5 h-5" />
        </div>
      </a>

      {/* Neumorphism styles */}
      <style>
        {`
          .shadow-neu {
            box-shadow: 6px 6px 12px rgba(0,0,0,0.12),
                        -6px -6px 12px rgba(255,255,255,0.7);
          }
          .shadow-neu-inset {
            box-shadow: inset 4px 4px 12px rgba(0,0,0,0.12),
                        inset -4px -4px 12px rgba(255,255,255,0.8);
          }
        `}
      </style>
    </section>
  );
};

