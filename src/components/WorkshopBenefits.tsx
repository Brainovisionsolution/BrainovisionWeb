import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Hammer, Users, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
const benefits = [
  {
    icon: BookOpen,
    title: 'Skill-based Learning',
    description: 'Hands-on experience with real-world projects using latest technologies.',
  },
  {
    icon: Award,
    title: 'Industry Certificates',
    description: 'Get certified by top-tier companies and showcase your expertise.',
  },
  {
    icon: Hammer,
    title: 'Project Building',
    description: 'Create real apps and tools that solve real problems.',
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'Guidance from seasoned industry professionals throughout your journey.',
  },
  {
    icon: Target,
    title: 'Career Focus',
    description: 'Learn what companies are hiring for and align your growth.',
  },
  {
    icon: Zap,
    title: 'Fast-track Learning',
    description: 'Accelerated programs designed to get you job-ready faster.',
  }
];

const WorkshopBenefits = () => {
  return (
    <section className="py-24 bg-[#fefefe] dark:bg-[#1b1b1d] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white">
            Why Choose Our <span className="text-yellow-400">Workshops?</span>
          </h2>
          <p className="text-lg mt-4 text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">
            Practical, mentor-driven, and designed to launch your career with confidence.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl text-center neumorphism-card hover:scale-[1.03] transition duration-300 hover:shadow-yellow-400/40 dark:hover:shadow-yellow-300/20"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full neumorphism-icon shadow-inner">
                <benefit.icon className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-block px-10 py-8 rounded-[30px] neumorphism-card"
          >
            <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
              Start Your Journey Now
            </h3>
            <p className="mb-6 text-gray-500 dark:text-gray-300 max-w-md mx-auto">
              Join thousands of students who’ve transformed their careers.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold rounded-xl hover:brightness-110 transition">
              Explore Workshops
            </button>
           <Link to="/proposal">
  <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold rounded-xl hover:brightness-110 transition">
    Get Your Proposal
  </button>
</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopBenefits;
