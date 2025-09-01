import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, UserPlus, Users, Award } from 'lucide-react';

const steps = [
  {
    icon: BookOpen,
    title: 'Choose Topic',
    description:
      'Browse through our extensive catalog of workshop topics and select the one that matches your learning goals.',
  },
  {
    icon: Calendar,
    title: 'Schedule',
    description:
      'Pick a convenient date and time slot that fits your schedule. We offer flexible timing options.',
  },
  {
    icon: UserPlus,
    title: 'Register',
    description:
      'Complete your registration with just a few clicks. Secure your spot in the workshop.',
  },
  {
    icon: Users,
    title: 'Attend',
    description:
      'Join the live workshop session and engage with expert instructors and fellow participants.',
  },
  {
    icon: Award,
    title: 'Get Certified',
    description:
      'Complete the workshop and receive your industry-recognized certificate to boost your profile.',
  },
];

const WorkshopProcess = () => {
  return (
    <section className="py-24 bg-[#fefefe] dark:bg-[#1b1b1d] relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white">
            Workshop <span className="text-yellow-400">Process</span>
          </h2>
          <p className="text-lg mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Follow our simple 5-step process to join workshops and enhance your skills with industry experts.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-4 border-yellow-300 ml-6 space-y-14">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative pl-10"
            >
              {/* Neumorphic Icon Bubble */}
              <div className="absolute left-[-36px] top-2 w-14 h-14 rounded-full neumorphism-icon flex items-center justify-center text-yellow-500">
                <step.icon className="w-6 h-6" />
              </div>

              {/* Neumorphic Card */}
              <div className="neumorphism-card p-6 rounded-2xl transition hover:scale-[1.02] duration-300">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-24">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl shadow-neumorphic transition-all duration-300"
          >
            Start Your Learning Journey
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default WorkshopProcess;
