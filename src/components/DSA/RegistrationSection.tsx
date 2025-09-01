import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Building2, CheckCircle } from 'lucide-react';

const RegistrationSection: React.FC = () => {
  const studentFeatures = [
    "Complete DSA curriculum access",
    "Live sessions with global experts",
    "Lifetime LMS access",
    "Official completion certificate",
    "Career guidance sessions",
    "World record participation"
  ];

  const hostFeatures = [
    "Institution global recognition",
    "Faculty empowerment programs",
    "Marketing exposure package",
    "Cash prize eligibility",
    "Network with 500+ institutions",
    "Official host certificate"
  ];

  return (
    <section className="py-20 bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Registration
            </span>{" "}
            Open
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Secure your spot in this historic global learning event
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-orange-200/20 text-orange-500 px-6 py-3 rounded-full border border-orange-300/30"
          >
            <Clock className="w-5 h-5" />
            <span className="font-semibold">Registration Deadline: January 15, 2026</span>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Student Registration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-yellow-100/20 to-orange-200/20 rounded-3xl p-8 md:p-10 border border-orange-300/30 shadow-neu-light dark:shadow-neu-dark"
          >
            <div className="text-center mb-8">
              <Users className="w-16 h-16 text-orange-500 mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Student Registration
              </h3>
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">₹99/-</div>
              <p className="text-gray-700 dark:text-gray-300">Early Bird Pricing</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">(Regular: ₹499/-)</p>
            </div>

            <div className="space-y-3 mb-8">
              <h4 className="font-bold text-orange-500 mb-4">What's Included:</h4>
              {studentFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="https://rzp.io/rzp/Uo7FG6bB"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px #FFA500" }}
              whileTap={{ scale: 0.95 }}
              className="block w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-bold py-4 px-8 rounded-full text-lg text-center transition-all duration-300"
            >
              🎓 Register as Student - ₹99/-
            </motion.a>
          </motion.div>

          {/* Host Department Registration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-yellow-100/20 to-orange-200/20 rounded-3xl p-8 md:p-10 border border-orange-300/30 shadow-neu-light dark:shadow-neu-dark"
          >
            <div className="text-center mb-8">
              <Building2 className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Host Department Registration
              </h3>
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">₹999/-</div>
              <p className="text-gray-700 dark:text-gray-300">Institution Partnership</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">(Value: ₹10,000+)</p>
            </div>

            <div className="space-y-3 mb-8">
              <h4 className="font-bold text-yellow-500 mb-4">What's Included:</h4>
              {hostFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="https://rzp.io/rzp/utwbMAmX"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px #FFC107" }}
              whileTap={{ scale: 0.95 }}
              className="block w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold py-4 px-8 rounded-full text-lg text-center transition-all duration-300"
            >
              🏛️ Register as Host Department - ₹999/-
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-yellow-100/10 to-orange-200/10 rounded-2xl p-8 border border-orange-300/30 shadow-neu-light dark:shadow-neu-dark">
            <h3 className="text-2xl font-bold mb-4">
              ⚡ <span className="text-orange-500">Limited Time Offer</span>
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Early bird pricing available until January 10, 2026. Don't miss this opportunity to be part of history!
            </p>
            <div className="flex justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
              <span>✅ Instant Confirmation</span>
              <span>✅ Secure Payment</span>
              <span>✅ Full Refund Policy</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Neumorphism Shadow Utilities */}
      <style>
        {`
          .shadow-neu-light {
            box-shadow: 10px 10px 20px rgba(0,0,0,0.08), -10px -10px 20px rgba(255,255,255,0.7);
          }
          .dark .shadow-neu-dark {
            box-shadow: 10px 10px 20px rgba(0,0,0,0.3), -10px -10px 20px rgba(255,165,0,0.1);
          }
        `}
      </style>
    </section>
  );
};

export default RegistrationSection;
