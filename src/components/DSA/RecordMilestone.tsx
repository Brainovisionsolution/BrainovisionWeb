import React from "react";
import { motion } from "framer-motion";
import { Trophy, Medal, Star, Zap } from "lucide-react";

const RecordMilestone: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6 justify-center">
            <Trophy className="w-8 h-8 text-orange-500 dark:text-yellow-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Record-Breaking{" "}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                Milestone
              </span>
            </h2>
            <Trophy className="w-8 h-8 text-orange-500 dark:text-yellow-400" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Card + Side Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Record Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white/50 dark:bg-black/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-orange-300/20 shadow-neu">
              <div className="flex items-center gap-4 mb-6">
                <Medal className="w-12 h-12 text-orange-500 dark:text-yellow-400" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-orange-500 dark:text-yellow-400">
                    India Book of Records
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">Already Achieved ✅</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                We've successfully been{" "}
                <span className="text-orange-500 dark:text-yellow-400 font-semibold">
                  recognized in the India Book of Records
                </span>{" "}
                for organizing the largest simultaneous Data Structures & Algorithms bootcamp in the country. This achievement marks our commitment to educational excellence and innovation.
              </p>
              <div className="bg-white/20 dark:bg-black/30 rounded-xl p-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  "Largest Online DSA Bootcamp with 15,000+ simultaneous participants from 200+ institutions across India" - India Book of Records 2024
                </p>
              </div>
            </div>
          </motion.div>

          {/* Side Goals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/50 dark:bg-black/50 backdrop-blur-lg rounded-2xl p-6 border border-orange-300/20 shadow-neu">
              <Star className="w-10 h-10 text-orange-500 dark:text-yellow-400 mb-4" />
              <h4 className="text-xl font-bold mb-2 text-orange-500 dark:text-yellow-400">Next Goal</h4>
              <p className="text-gray-700 dark:text-gray-300">Asia Book of Records</p>
            </div>
            
            <div className="bg-white/50 dark:bg-black/50 backdrop-blur-lg rounded-2xl p-6 border border-orange-300/20 shadow-neu">
              <Zap className="w-10 h-10 text-orange-500 dark:text-yellow-400 mb-4" />
              <h4 className="text-xl font-bold mb-2 text-orange-500 dark:text-yellow-400">Ultimate Goal</h4>
              <p className="text-gray-700 dark:text-gray-300">Guinness World Record</p>
            </div>
          </motion.div>
        </div>

        {/* Be Part of History */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/50 dark:bg-black/50 backdrop-blur-lg rounded-3xl p-8 text-center border border-orange-300/20 shadow-neu"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            🌍{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Be Part of History
            </span>
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Join us in this historic journey as we aim to break international records and set new benchmarks in global educational collaboration. Your participation contributes to this magnificent achievement.
          </p>
          <div className="flex justify-center gap-8 text-center text-gray-900 dark:text-white">
            <div>
              <div className="text-3xl font-bold text-orange-500 dark:text-yellow-400">2024</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">India Record</div>
            </div>
            <div className="text-orange-500 dark:text-yellow-400 text-2xl">→</div>
            <div>
              <div className="text-3xl font-bold text-orange-500 dark:text-yellow-400">2025</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Asia Record</div>
            </div>
            <div className="text-orange-500 dark:text-yellow-400 text-2xl">→</div>
            <div>
              <div className="text-3xl font-bold text-orange-500 dark:text-yellow-400">2026</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">World Record</div>
            </div>
          </div>
        </motion.div>

        {/* Neumorphic Shadow Utilities */}
        <style>
          {`
            .shadow-neu {
              box-shadow: 8px 8px 20px rgba(0,0,0,0.08), -8px -8px 20px rgba(255,255,255,0.7);
            }
            .dark .shadow-neu {
              box-shadow: 8px 8px 20px rgba(0,0,0,0.3), -8px -8px 20px rgba(255,165,0,0.1);
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default RecordMilestone;
