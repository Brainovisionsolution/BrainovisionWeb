import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Layers, Zap, Users, Globe, BookOpen, Award } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-900 transition-colors duration-700">
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-yellow-200/30 rounded-full blur-[80px]"
          animate={{ 
            scale: [1, 1.1, 1], 
            opacity: [0.3, 0.5, 0.3],
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-gradient-to-br from-yellow-200/40 to-orange-200/40 rounded-full blur-[60px]"
          animate={{ 
            scale: [1.1, 0.9, 1.1], 
            opacity: [0.4, 0.2, 0.4],
            x: [0, -15, 0],
            y: [0, 15, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Title */}
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block text-gray-800 dark:text-white">
                  International
                </span>
                <span className="block bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-400 bg-clip-text text-transparent">
                  Bootcamp
                </span>
              </motion.h1>

              <motion.h2 
                className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Code className="w-8 h-8 text-orange-500" />
                DSA for <span className="text-orange-500">DeepTech</span>
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Organized by{" "}
              <span className="text-orange-600 dark:text-orange-400 font-semibold">
                Brainovision Solutions India Pvt. Ltd.
              </span>
              {" "}— connecting students, innovators, and global institutions through advanced learning.
            </motion.p>

            {/* Date Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="inline-block"
            >
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-neumorphic-inset border border-orange-200/30 dark:border-orange-700/30">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">📅</span>
                  <span className="text-xl font-bold text-orange-600 dark:text-orange-400">
                    February 1 - 28, 2026
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  A Month of Global Learning Excellence
                </p>
              </div>
            </motion.div>

            {/* Action Buttons */}
           {/* Action Buttons */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 1 }}
  className="flex flex-col sm:flex-row gap-4"
>
  {/* Student Register Button */}
  <motion.a
    href="https://rzp.io/rzp/Uo7FG6bB"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="bg-gray-100 dark:bg-gray-800 text-orange-600 dark:text-orange-400 font-semibold py-4 px-8 rounded-2xl shadow-neumorphic hover:shadow-neumorphic-hover transition-all duration-300 text-center group"
  >
    <span className="flex items-center justify-center gap-2">
      <BookOpen className="w-5 h-5" />
      Register as Student
      <span className="flex items-center gap-2">
        <span className="line-through text-gray-500">₹999/-</span>
        <span className="font-bold text-orange-500">₹99/-</span>
      </span>
    </span>
  </motion.a>

  {/* Host Dept Register Button */}
  <motion.a
    href="https://rzp.io/rzp/utwbMAmX"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="bg-gray-100 dark:bg-gray-800 text-orange-600 dark:text-orange-400 font-semibold py-4 px-8 rounded-2xl shadow-neumorphic hover:shadow-neumorphic-hover transition-all duration-300 text-center border border-orange-200/50 dark:border-orange-700/50"
  >
    <span className="flex items-center justify-center gap-2">
      <Award className="w-5 h-5" />
      Register as Host Dept
      <span className="flex items-center gap-2">
        <span className="line-through text-gray-500">₹9999/-</span>
        <span className="font-bold text-orange-500">₹999/-</span>
      </span>
    </span>
  </motion.a>
</motion.div>


            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-500" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  1,00,000+ Participants
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  500+ Institutions
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-orange-500" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  30+ Countries
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - DSA Visualization */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full max-w-lg">
              
              {/* Main DSA Container */}
              <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-12 shadow-neumorphic-large border border-orange-200/20 dark:border-orange-700/20">
                
                {/* DSA Title */}
                <motion.div
                  className="text-center mb-12"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <h3 className="text-5xl font-black text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-400 bg-clip-text mb-3">
                    DSA
                  </h3>
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 tracking-wider">
                    DATA STRUCTURES & ALGORITHMS
                  </p>
                </motion.div>

                {/* Algorithm Visualization */}
                <div className="relative flex items-center justify-center">
                  
                  {/* Center Core */}
                  <motion.div
                    className="relative z-10 w-20 h-20 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl shadow-neumorphic-inset flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Zap className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Orbiting Elements */}
                  <div className="absolute inset-0">
                    {[
                      { icon: Code, angle: 0, delay: 0, color: "text-orange-500" },
                      { icon: Database, angle: 90, delay: 0.25, color: "text-yellow-500" },
                      { icon: Layers, angle: 180, delay: 0.5, color: "text-orange-600" },
                      { icon: Globe, angle: 270, delay: 0.75, color: "text-yellow-600" }
                    ].map(({ icon: Icon, angle, delay, color }, index) => (
                      <motion.div
                        key={index}
                        className="absolute w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-neumorphic flex items-center justify-center border border-orange-200/30 dark:border-orange-700/30"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          rotate: [angle, angle + 360]
                        }}
                        transition={{ 
                          opacity: { duration: 0.5, delay: delay + 1 },
                          scale: { duration: 0.5, delay: delay + 1 },
                          rotate: { duration: 15, repeat: Infinity, ease: "linear" }
                        }}
                        style={{
                          top: '50%',
                          left: '50%',
                          transformOrigin: '24px 24px',
                          transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(80px) rotate(-${angle}deg)`
                        }}
                      >
                        <Icon className={`w-6 h-6 ${color}`} />
                      </motion.div>
                    ))}
                  </div>

                  {/* Connection Lines */}
                  <div className="absolute inset-0 opacity-20">
                    <motion.div
                      className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"
                      animate={{ scaleX: [0, 1, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-yellow-400 to-transparent"
                      animate={{ scaleY: [0, 1, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    />
                  </div>
                </div>

                {/* Binary Animation */}
                <motion.div
                  className="flex justify-center mt-8 space-x-1 text-orange-400/60 dark:text-yellow-400/60 font-mono text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  {[1, 0, 1, 1, 0, 1, 0, 1].map((bit, index) => (
                    <motion.span
                      key={index}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: index * 0.1 }}
                    >
                      {bit}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Decorative Corner Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400/20 rounded-lg"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400/20 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Neumorphism Styles */}
      <style jsx>{`
        .shadow-neumorphic {
          box-shadow: 
            6px 6px 12px rgba(0, 0, 0, 0.1),
            -6px -6px 12px rgba(255, 255, 255, 0.7);
        }
        
        .shadow-neumorphic-large {
          box-shadow: 
            12px 12px 24px rgba(0, 0, 0, 0.1),
            -12px -12px 24px rgba(255, 255, 255, 0.8);
        }
        
        .shadow-neumorphic-inset {
          box-shadow: 
            inset 4px 4px 8px rgba(0, 0, 0, 0.1),
            inset -4px -4px 8px rgba(255, 255, 255, 0.7);
        }
        
        .shadow-neumorphic-hover {
          box-shadow: 
            8px 8px 16px rgba(0, 0, 0, 0.15),
            -8px -8px 16px rgba(255, 255, 255, 0.8);
        }
        
        .dark .shadow-neumorphic {
          box-shadow: 
            6px 6px 12px rgba(0, 0, 0, 0.3),
            -6px -6px 12px rgba(255, 255, 255, 0.05);
        }
        
        .dark .shadow-neumorphic-large {
          box-shadow: 
            12px 12px 24px rgba(0, 0, 0, 0.4),
            -12px -12px 24px rgba(255, 255, 255, 0.08);
        }
        
        .dark .shadow-neumorphic-inset {
          box-shadow: 
            inset 4px 4px 8px rgba(0, 0, 0, 0.3),
            inset -4px -4px 8px rgba(255, 255, 255, 0.05);
        }
        
        .dark .shadow-neumorphic-hover {
          box-shadow: 
            8px 8px 16px rgba(0, 0, 0, 0.4),
            -8px -8px 16px rgba(255, 255, 255, 0.08);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
