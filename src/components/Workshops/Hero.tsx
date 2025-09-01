'use client'

import React from 'react'
import { Play, Calendar, Users, ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const images = ['/Workshops/workshop.jpg', '/Workshops/workshop1.jpg', '/Workshops/workshop2.jpg']

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#fffcfc] dark:bg-[#1e1e1e] overflow-hidden px-6 lg:px-16">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#fff59d]/20 rounded-full blur-xl animate-bounce-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#ffcc80]/20 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-[#fffde7]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-[#ffe0b2]/15 rounded-full blur-xl animate-bounce-slow"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-16 lg:gap-20">
        {/* Left Content */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2c2c2c] dark:text-white mb-6 leading-tight">
            <motion.span
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
              className="block"
            >
              Workshops &amp;
            </motion.span>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400"
            >
              Hackathons
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-4"
          >
            Learn. Build. Lead. Compete. Win.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg text-gray-500 dark:text-gray-400 mb-8"
          >
            Join thousands of students in cutting-edge workshops and exciting hackathons.
            Build skills, create amazing projects, and launch your tech career.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-start"
          >
            <Link to="/allevents" className="inline-block">
  <button className="px-5 py-2 rounded-2xl bg-[#e0e0e0] text-gray-800 dark:bg-[#2c2c2c] dark:text-white font-semibold shadow-neumorphic hover:shadow-neumorphic-inset transition-all duration-300 flex items-center gap-2">
    <Users className="w-3 h-3" />
    <span>View Events</span>
  </button>
</Link>

            <Link to="/workshopsAndHackathons/proposal" className="inline-block">
  <button className="px-8 py-4 rounded-2xl bg-[#e0e0e0] text-gray-800 dark:bg-[#2c2c2c] dark:text-white font-semibold shadow-neumorphic hover:shadow-neumorphic-inset transition-all duration-300 flex items-center gap-2">
    <Users className="w-3 h-3" />
    <span>Host with Us</span>
  </button>
</Link>

            <button className="px-5 py-2 rounded-2xl bg-[#e0e0e0] text-yellow-600 dark:bg-[#2c2c2c] dark:text-yellow-400 font-semibold shadow-neumorphic hover:shadow-neumorphic-inset transition-all duration-300 flex items-center gap-2">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Visual: Triangle Hanging Images */}
        {/* Right Visual: Triangle Hanging Images */}
<motion.div
  className="relative w-full lg:w-1/2 flex justify-center items-start min-h-[400px]"
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
>
  <div className="relative flex flex-col items-center gap-8 w-full max-w-xl">
    {/* Middle Image (Raised) */}
    <div className="flex flex-col items-center -mb-4">
      <div className="w-0.5 h-20 bg-gray-400" />
      <div className="w-72 aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200 rotate-[1.5deg] z-10">
        <img src={images[1]} alt="Middle" className="w-full h-full object-cover" />
      </div>
    </div>

    {/* Bottom Row: Left & Right Images */}
    <div className="flex justify-center gap-10 w-full">
      {/* Left Image */}
      <div className="flex flex-col items-center">
        <div className="w-0.5 h-20 bg-gray-400" />
        <div className="w-72 aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200 -rotate-[4deg]">
          <img src={images[0]} alt="Left" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Right Image */}
      <div className="flex flex-col items-center">
        <div className="w-0.5 h-20 bg-gray-400" />
        <div className="w-72 aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200 rotate-[4deg]">
          <img src={images[2]} alt="Right" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </div>
</motion.div>


      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#upcoming-events"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-3 rounded-full shadow-neumorphic-inner cursor-pointer animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-yellow-500" />
      </motion.a>
    </section>
  )
}

export default Hero
