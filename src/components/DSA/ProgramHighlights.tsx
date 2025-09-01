import React from "react";
import { motion } from "framer-motion";
import { Calendar, Monitor, Clock, GraduationCap, Award } from "lucide-react";

const ProgramHighlights: React.FC = () => {
  const highlights = [
    {
      icon: Calendar,
      title: "Duration",
      content: "1st-28th Feb 2026",
      subtitle: "Entire Month"
    },
    {
      icon: Monitor,
      title: "Mode",
      content: "Virtual",
      subtitle: "Attend from Anywhere"
    },
    {
      icon: Clock,
      title: "Timings",
      content: "7:00PM-9:00PM",
      subtitle: "Evening Sessions"
    },
    {
      icon: GraduationCap,
      title: "Audience",
      content: "Students, Faculty, Job Seekers, Freelancers & School Students",
      subtitle: "Worldwide Participation"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-orange-500">  Program Highlights</span>
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto"></div>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-orange-50 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center border border-orange-200 dark:border-orange-400/20 hover:border-orange-400/40 transition-all duration-300"
            >
              <div className="bg-orange-100 dark:bg-orange-400/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <highlight.icon className="w-8 h-8 text-orange-500 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{highlight.title}</h3>
              <p className="text-orange-500 dark:text-orange-400 font-semibold text-lg mb-2">{highlight.content}</p>
              <p className="text-gray-600 dark:text-gray-400">{highlight.subtitle}</p>
            </motion.div>
          ))}

          {/* Cash Prize Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-yellow-50 dark:bg-yellow-500/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-yellow-200 dark:border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300"
          >
            <div className="bg-yellow-100 dark:bg-yellow-400/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Cash Prize</h3>
            <p className="text-yellow-500 dark:text-yellow-400 font-semibold text-lg mb-2">₹2,00,000 - ₹5,00,000</p>
            <p className="text-gray-600 dark:text-gray-400">Awarded to Top Performers</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
