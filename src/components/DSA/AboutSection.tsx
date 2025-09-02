
import React from "react";
import { motion } from "framer-motion";
import { Award, Target, Users } from "lucide-react";

const AboutSection: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

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
            About the <span className="text-orange-500">Bootcamp</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Award className="w-12 h-12 text-orange-400 mb-6" />,
              title: "World-Class Training",
              description:
                "Comprehensive Data Structures & Algorithms curriculum designed for AI, ML, Blockchain, and Quantum Computing."
            },
            {
              icon: <Target className="w-12 h-12 text-orange-400 mb-6" />,
              title: "Record-Breaking Initiative",
              description:
                "Recognized in India Book of Records – now aiming for Asia & Guinness World Records with global participation."
            },
            {
              icon: <Users className="w-12 h-12 text-orange-400 mb-6" />,
              title: "Global Community",
              description:
                "Connect with 500+ institutions worldwide and build a network of like-minded professionals in cutting-edge technology domains."
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ delay: i * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-orange-400/30 
                         shadow-neu-light dark:shadow-neu-dark hover:scale-105 transition-all duration-300"
            >
              {card.icon}
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-yellow-300">
                {card.title}
              </h3>
              <p className="text-gray-700 dark:text-yellow-200">{card.description}</p>
            </motion.div>
          ))}
        </div>

        
      </div>

      {/* Neumorphism Shadows */}
      <style jsx>{`
        .shadow-neu-light {
          box-shadow: 6px 6px 10px #e5e5e5, -6px -6px 12px #ffffff;
        }
        .shadow-neu-dark {
          box-shadow: 6px 6px 10px #0f0f0f, -6px -6px 12px #1c1c1c;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
