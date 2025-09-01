import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Globe } from 'lucide-react';

const GuestPlan: React.FC = () => {
  const weeks = [
    { week: 1, theme: "AI & ML Foundations", guests: "Tech Giants" },
    { week: 2, theme: "Blockchain & Web3", guests: "Crypto Leaders" },
    { week: 3, theme: "Quantum Computing", guests: "Research Scientists" },
    { week: 4, theme: "Cybersecurity", guests: "Security Experts" }
  ];

  return (
    <section className="py-20 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Guest <span className="text-orange-500">Contribution Plan</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 dark:text-yellow-200 max-w-3xl mx-auto">
            30 Days → 30 Global Experts sharing their expertise
          </p>
        </motion.div>

        {/* 30 Days Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 border border-orange-400/20 shadow-neu-light dark:shadow-neu-dark mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              🌟 <span className="text-orange-500">30 Days, 30 Global Guests</span>
            </h3>
            <p className="text-gray-700 dark:text-yellow-200 text-lg">
              Every day features a new expert from leading tech companies worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weeks.map((week, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-orange-50 dark:bg-gray-800 rounded-xl p-6 border border-orange-400/20 
                           shadow-neu-light dark:shadow-neu-dark hover:border-orange-400/40 
                           hover:scale-105 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500 mb-2">Week {week.week}</div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-yellow-300">{week.theme}</h4>
                  <p className="text-sm text-gray-700 dark:text-yellow-200">{week.guests}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {[{
            icon: Calendar,
            title: "Daily Sessions",
            description: "Each guest brings unique insights from their expertise in cutting-edge technologies and real-world applications."
          }, {
            icon: Users,
            title: "Interactive Format",
            description: "Live Q&A sessions, coding demonstrations, and personalized guidance from industry veterans."
          }, {
            icon: Globe,
            title: "Global Perspective",
            description: "Learn from experts across different continents, time zones, and cultural backgrounds for a truly international experience."
          }].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-orange-400/20 
                         shadow-neu-light dark:shadow-neu-dark hover:border-orange-400/40 
                         transition-all duration-300"
            >
              <item.icon className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-yellow-300">{item.title}</h3>
              <p className="text-gray-700 dark:text-yellow-200">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Neumorphism Shadows */}
      <style jsx>{`
        .shadow-neu-light {
          box-shadow: 6px 6px 12px #e2e2e2, -6px -6px 12px #ffffff;
        }
        .shadow-neu-dark {
          box-shadow: 6px 6px 12px #111111, -6px -6px 12px #222222;
        }
      `}</style>
    </section>
  );
};

export default GuestPlan;
