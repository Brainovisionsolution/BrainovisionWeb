import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Video, Trophy, Users, Download } from "lucide-react";

const ParticipantBenefits: React.FC = () => {
  const benefits = [
    {
      icon: Trophy,
      title: "Asia World Record Participation",
      description: "Be part of the Guinness World Record attempt",
      highlight: "Historic Achievement"
    },
    {
      icon: Award,
      title: "International Certificate",
      description: "Receive an internationally valid certificate",
      highlight: "Global Recognition"
    },
    {
      icon: BookOpen,
      title: "1-Year LMS Access",
      description: "Access sessions and resources for one year",
      highlight: "Worth ₹5,000+"
    },
    {
      icon: Video,
      title: "Job-Ready DSA Training",
      description: "Preparation for product-company placements",
      highlight: "Career Ready"
    },
    {
      icon: Users,
      title: "Mentorship",
      description: "Career & research guidance from global experts",
      highlight: "Exclusive Insights"
    },
    {
      icon: Download,
      title: "T-Hub Exclusive Invitation",
      description: "Top 1 student from each department invited to India’s largest innovation hub",
      highlight: "Prestigious Opportunity"
    }
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-yellow-300">
            Exclusive <span className="text-orange-400">Benefits</span> for Participants
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 dark:text-yellow-200 max-w-3xl mx-auto">
            Get incredible value worth ₹10,000+ for just ₹99/- registration fee
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-orange-400/20 hover:border-yellow-400/40 transition-all duration-300 shadow-neu group"
            >
              <div className="bg-orange-400/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-400/30 transition-all duration-300">
                <benefit.icon className="w-8 h-8 text-orange-400" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-center text-gray-900 dark:text-yellow-300 group-hover:text-yellow-400 transition-colors">
                {benefit.title}
              </h3>

              <p className="text-gray-700 dark:text-yellow-200 text-center mb-4 text-sm leading-relaxed">
                {benefit.description}
              </p>

              <div className="text-center">
                <span className="inline-block bg-orange-400/20 text-orange-500 dark:text-yellow-300 text-xs px-3 py-1 rounded-full font-semibold">
                  {benefit.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bonus Benefits */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-200/20 via-yellow-200/20 to-orange-100/20 rounded-3xl p-8 md:p-12 border border-orange-400/30 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-yellow-300">
            🎁 <span className="text-orange-400">Bonus Benefits</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/50 dark:bg-gray-900/50 rounded-xl p-6 border border-orange-200/10 shadow-neu">
              <h4 className="font-bold text-orange-400 dark:text-yellow-300 mb-2">Career Guidance</h4>
              <p className="text-gray-700 dark:text-yellow-200 text-sm">One-on-one mentoring sessions with industry experts</p>
            </div>
            <div className="bg-white/50 dark:bg-gray-900/50 rounded-xl p-6 border border-orange-200/10 shadow-neu">
              <h4 className="font-bold text-orange-400 dark:text-yellow-300 mb-2">Interview Prep</h4>
              <p className="text-gray-700 dark:text-yellow-200 text-sm">Mock interviews and coding challenge practice</p>
            </div>
            <div className="bg-white/50 dark:bg-gray-900/50 rounded-xl p-6 border border-orange-200/10 shadow-neu">
              <h4 className="font-bold text-orange-400 dark:text-yellow-300 mb-2">Job Referrals</h4>
              <p className="text-gray-700 dark:text-yellow-200 text-sm">Direct referrals to partner companies hiring</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 p-6 bg-orange-400/20 dark:bg-yellow-800/20 rounded-2xl border border-orange-400/30 shadow-neu"
          >
            <p className="text-lg font-semibold text-gray-900 dark:text-yellow-200">
              💰 <span className="text-orange-400">Total Value:</span> ₹10,000+ | 
              <span className="text-orange-400"> Your Investment:</span> Only ₹99/-
            </p>
            <p className="text-sm text-gray-600 dark:text-yellow-300 mt-2">
              Limited time early bird pricing - Register now!
            </p>
          </motion.div>
        </motion.div>

        {/* Neumorphic Shadow Utility */}
        <style>
          {`
            .shadow-neu {
              box-shadow: 8px 8px 20px rgba(0,0,0,0.1), -8px -8px 20px rgba(255,165,0,0.05);
            }
            .dark .shadow-neu {
              box-shadow: 8px 8px 20px rgba(0,0,0,0.3), -8px -8px 20px rgba(255,215,0,0.1);
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default ParticipantBenefits;
