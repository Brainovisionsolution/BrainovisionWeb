import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Award, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const programs = [
  {
    logo: "/courses/students.png",
    title: "For Students",
    chips: ["College Level", "Beginner to Advanced", "Live Projects"],
    description:
      "Kickstart your tech journey with foundational and advanced topics tailored for college students.",
    details:
      "Includes 6 months of mentoring, live project work, and certification to boost your career start.",
    img: "/courses/student1.png",
    route: "/StudentCourse",
    icon: Users,
    gradient: "from-orange-400 to-amber-400",
  },
  {
    logo: "/courses/WorkingProfessinals.png",
    title: "For Working Professionals",
    chips: ["Evening Classes", "Career Switch", "Capstone Project"],
    description:
      "Switch domains, upskill with in-demand stacks, and boost your salary with real-world mentorship.",
    details:
      "Covers trending technologies, leadership skills, and portfolio-building projects for career growth.",
    img: "/courses/student4.png",
    route: "/WorkingProfessionals",
    icon: Award,
    gradient: "from-amber-400 to-yellow-400",
  },
  {
    logo: "/courses/jobOriented.png",
    title: "For Job Seekers",
    chips: ["Job-Ready", "Interview Prep", "System Design"],
    description:
      "Get job-ready with placement training, DSA prep, system design and mock interviews.",
    details:
      "Full placement support, mock technical rounds, and personalized career strategy sessions.",
    img: "/images/student.png",
    route: "/joboriented",
    icon: Star,
    gradient: "from-yellow-400 to-orange-400",
  },
];

export default function ProgramDetails() {
  const [flipped, setFlipped] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const navigate = useNavigate();

  const toggleFlip = (index: number) => {
    setFlipped(flipped === index ? null : index);
  };

  return (
    <section
      id="programs"
      className="relative min-h-screen py-20 overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      {/* Animated Wave Background - Light Mode */}
      <div className="absolute inset-0 overflow-hidden dark:hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1400 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#fdba74" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#fb923c" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#fde68a" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffedd5" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#fed7aa" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          <motion.path
            d="M0,400 C350,300 700,500 1400,350 L1400,800 L0,800 Z"
            fill="url(#waveGradient1)"
            initial={{ d: "M0,400 C350,300 700,500 1400,350 L1400,800 L0,800 Z" }}
            animate={{ 
              d: [
                "M0,400 C350,300 700,500 1400,350 L1400,800 L0,800 Z",
                "M0,450 C350,350 700,450 1400,400 L1400,800 L0,800 Z",
                "M0,400 C350,300 700,500 1400,350 L1400,800 L0,800 Z"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.path
            d="M0,500 C450,400 900,600 1400,450 L1400,800 L0,800 Z"
            fill="url(#waveGradient2)"
            initial={{ d: "M0,500 C450,400 900,600 1400,450 L1400,800 L0,800 Z" }}
            animate={{ 
              d: [
                "M0,500 C450,400 900,600 1400,450 L1400,800 L0,800 Z",
                "M0,550 C450,450 900,550 1400,500 L1400,800 L0,800 Z",
                "M0,500 C450,400 900,600 1400,450 L1400,800 L0,800 Z"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          <motion.path
            d="M0,600 C300,550 800,650 1400,580 L1400,800 L0,800 Z"
            fill="url(#waveGradient3)"
            initial={{ d: "M0,600 C300,550 800,650 1400,580 L1400,800 L0,800 Z" }}
            animate={{ 
              d: [
                "M0,600 C300,550 800,650 1400,580 L1400,800 L0,800 Z",
                "M0,650 C300,600 800,700 1400,630 L1400,800 L0,800 Z",
                "M0,600 C300,550 800,650 1400,580 L1400,800 L0,800 Z"
              ]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />
        </svg>
      </div>

      {/* Animated Wave Background - Dark Mode */}
      <div className="absolute inset-0 overflow-hidden hidden dark:block">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1400 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="darkWaveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ea580c" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#dc2626" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#b91c1c" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="darkWaveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#d97706" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#b45309" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="darkWaveGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fb923c" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#f97316" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          <motion.path
            d="M0,400 C350,300 700,500 1400,350 L1400,800 L0,800 Z"
            fill="url(#darkWaveGradient1)"
            initial={{ d: "M0,400 C350,300 700,500 1400,350 L1400,800 L0,800 Z" }}
            animate={{ 
              d: [
                "M0,400 C350,300 700,500 1400,350 L1400,800 L0,800 Z",
                "M0,450 C350,350 700,450 1400,400 L1400,800 L0,800 Z",
                "M0,400 C350,300 700,500 1400,350 L1400,800 L0,800 Z"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.path
            d="M0,500 C450,400 900,600 1400,450 L1400,800 L0,800 Z"
            fill="url(#darkWaveGradient2)"
            initial={{ d: "M0,500 C450,400 900,600 1400,450 L1400,800 L0,800 Z" }}
            animate={{ 
              d: [
                "M0,500 C450,400 900,600 1400,450 L1400,800 L0,800 Z",
                "M0,550 C450,450 900,550 1400,500 L1400,800 L0,800 Z",
                "M0,500 C450,400 900,600 1400,450 L1400,800 L0,800 Z"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          <motion.path
            d="M0,600 C300,550 800,650 1400,580 L1400,800 L0,800 Z"
            fill="url(#darkWaveGradient3)"
            initial={{ d: "M0,600 C300,550 800,650 1400,580 L1400,800 L0,800 Z" }}
            animate={{ 
              d: [
                "M0,600 C300,550 800,650 1400,580 L1400,800 L0,800 Z",
                "M0,650 C300,600 800,700 1400,630 L1400,800 L0,800 Z",
                "M0,600 C300,550 800,650 1400,580 L1400,800 L0,800 Z"
              ]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />
        </svg>
      </div>

      {/* Floating Orange Particles */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-orange-300/40 to-yellow-300/40 dark:from-orange-500/20 dark:to-yellow-500/20 blur-2xl animate-pulse" />
      <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-yellow-300/50 to-orange-300/50 dark:from-yellow-500/25 dark:to-orange-500/25 blur-2xl animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-1/4 w-28 h-28 rounded-full bg-gradient-to-br from-orange-400/40 to-amber-400/40 dark:from-orange-600/20 dark:to-amber-600/20 blur-2xl animate-pulse delay-2000" />
      <div className="absolute top-1/2 right-1/4 w-36 h-36 rounded-full bg-gradient-to-br from-amber-300/30 to-orange-300/30 dark:from-amber-500/15 dark:to-orange-500/15 blur-2xl animate-pulse delay-3000" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/30 border border-orange-200 dark:border-orange-700/50 mb-8"
          >
            <Star className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            <span className="text-orange-800 dark:text-orange-300 font-semibold text-sm">
              Premium Learning Programs
            </span>
          </motion.div>
          
          <h2 className="text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 bg-clip-text text-transparent tracking-tight leading-tight">
            Future-Ready Skills
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8">
            for Every Stage of Your Career
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Choose the program that suits your career stage and start building a future you're proud of with 
            industry-leading curriculum and world-class mentorship.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          {programs.map((program, i) => {
            const IconComponent = program.icon;
            return (
              <motion.div
                key={program.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                onClick={() => toggleFlip(i)}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative h-[550px] cursor-pointer [perspective:1200px] group"
              >
                <motion.div
                  animate={{ rotateY: flipped === i ? 180 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.02, y: -8 }}
                >
                  {/* FRONT CARD */}
                  <div
                    style={{ backfaceVisibility: "hidden" }}
                    className="absolute w-full h-full rounded-3xl bg-white dark:bg-gray-800 backdrop-blur-xl border-2 border-orange-200 dark:border-orange-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 flex flex-col overflow-hidden group-hover:border-orange-300 dark:group-hover:border-orange-600"
                  >
                    {/* Top Gradient Bar */}
                    <div className={`h-2 bg-gradient-to-r ${program.gradient}`} />
                    
                    {/* Card Content */}
                    <div className="p-8 flex flex-col h-full">
                      {/* Logo and Icon Section */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="relative">
                          <motion.div 
                            className={`absolute inset-0 bg-gradient-to-br ${program.gradient} rounded-2xl blur-lg opacity-30`}
                            animate={{ scale: hoveredCard === i ? 1.1 : 1 }}
                            transition={{ duration: 0.3 }}
                          />
                          <img
                            src={program.logo}
                            alt={program.title}
                            className="relative h-16 w-auto object-contain z-10"
                          />
                        </div>
                        <motion.div
                          animate={{ rotate: hoveredCard === i ? 360 : 0 }}
                          transition={{ duration: 0.6 }}
                          className={`p-3 rounded-xl bg-gradient-to-br ${program.gradient} shadow-lg`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </motion.div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
                        {program.title}
                      </h3>

                      {/* Chips */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {program.chips.map((chip, index) => (
                          <motion.span
                            key={chip}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + i * 0.1 }}
                            className="text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-full bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/40 dark:to-yellow-900/40 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700/50 shadow-sm hover:shadow-md transition-shadow duration-200"
                          >
                            {chip}
                          </motion.span>
                        ))}
                      </div>

                      {/* Content Area */}
                      <div className="flex flex-1 gap-6 items-center mb-8">
                        <div className="flex-1">
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {program.description}
                          </p>
                        </div>
                        <div className="relative">
                          <motion.div 
                            className={`absolute inset-0 bg-gradient-to-br ${program.gradient} rounded-2xl blur-xl opacity-20`}
                            animate={{ scale: hoveredCard === i ? 1.2 : 1 }}
                            transition={{ duration: 0.3 }}
                          />
                          <img 
                            src={program.img} 
                            alt={program.title} 
                            className="relative h-32 w-auto object-contain z-10 drop-shadow-lg" 
                            draggable={false} 
                          />
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/90 dark:bg-gray-800/90 border-2 border-orange-200 dark:border-orange-700 text-orange-700 dark:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:border-orange-300 dark:hover:border-orange-600 shadow-lg hover:shadow-xl flex-1 transition-all duration-300 font-semibold"
                        >
                          Request Call
                        </Button>
                        <Button
                          size="sm"
                          className={`bg-gradient-to-r ${program.gradient} hover:shadow-xl flex-1 transition-all duration-300 border-0 text-white font-semibold shadow-lg hover:scale-105`}
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(program.route);
                          }}
                        >
                          Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* BACK CARD */}
                  <div
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                    className="absolute w-full h-full rounded-3xl bg-white dark:bg-gray-800 backdrop-blur-xl border-2 border-orange-200 dark:border-orange-700/50 shadow-2xl flex flex-col overflow-hidden"
                  >
                    {/* Top Gradient Bar */}
                    <div className={`h-2 bg-gradient-to-r ${program.gradient}`} />
                    
                    <div className="p-10 flex flex-col justify-center h-full text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: flipped === i ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${program.gradient} flex items-center justify-center shadow-xl`}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                        {program.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-8">
                        {program.details}
                      </p>
                      
                      <div className="space-y-4">
                        <Button
                          className={`bg-gradient-to-r ${program.gradient} hover:shadow-2xl text-white px-8 py-4 rounded-2xl transition-all duration-300 text-lg font-bold hover:scale-105`}
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(program.route);
                          }}
                        >
                          Get Started <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: flipped === i ? 1 : 0 }}
                          transition={{ delay: 0.4 }}
                          className="text-sm text-gray-500 dark:text-gray-400"
                        >
                          Click anywhere to flip back
                        </motion.p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${program.gradient} opacity-0 group-hover:opacity-20 dark:group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}
                  animate={{ scale: hoveredCard === i ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <Award className="w-6 h-6" />
            <span className="text-lg font-bold">
              Join 10,000+ Successful Graduates
            </span>
          </div>
        </motion.div>
      </div>

      {/* Top Wave Decoration */}
      <div className="absolute top-0 left-0 w-full h-32 overflow-hidden">
        <svg
          className="absolute top-0 w-full h-full"
          viewBox="0 0 1400 150"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="topWaveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#fdba74" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#fb923c" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="topWaveGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ea580c" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#dc2626" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#b91c1c" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          <motion.path
            d="M0,75 C350,25 700,125 1400,50 L1400,0 L0,0 Z"
            fill="url(#topWaveGradient)"
            className="dark:hidden"
            initial={{ d: "M0,75 C350,25 700,125 1400,50 L1400,0 L0,0 Z" }}
            animate={{ 
              d: [
                "M0,75 C350,25 700,125 1400,50 L1400,0 L0,0 Z",
                "M0,50 C350,100 700,0 1400,75 L1400,0 L0,0 Z",
                "M0,75 C350,25 700,125 1400,50 L1400,0 L0,0 Z"
              ]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.path
            d="M0,75 C350,25 700,125 1400,50 L1400,0 L0,0 Z"
            fill="url(#topWaveGradientDark)"
            className="hidden dark:block"
            initial={{ d: "M0,75 C350,25 700,125 1400,50 L1400,0 L0,0 Z" }}
            animate={{ 
              d: [
                "M0,75 C350,25 700,125 1400,50 L1400,0 L0,0 Z",
                "M0,50 C350,100 700,0 1400,75 L1400,0 L0,0 Z",
                "M0,75 C350,25 700,125 1400,50 L1400,0 L0,0 Z"
              ]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </section>
  );
}