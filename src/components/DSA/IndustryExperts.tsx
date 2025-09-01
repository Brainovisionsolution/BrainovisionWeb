import React from "react";
import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";

// Replace these URLs with your actual logo paths or hosted images
const companies = [
  { logo: "/logos/google.png" },
  { logo: "/logos/microsoft.png" },
  { logo: "/logos/amazon.png" },
  { logo: "/logos/infosys.png" },
  { logo: "/logos/tcs.png" },
  { logo: "/logos/ibm.png" },
  { logo: "/logos/adobe.png" },
  { logo: "/logos/meta.png" },
];

const expertTypes = [
  "Senior Software Engineers",
  "Principal Data Scientists",
  "ML Engineering Managers",
  "Technical Architects",
  "Research Scientists",
  "Product Leaders",
];

const IndustryExperts: React.FC = () => {
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
            Industry{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Experts
            </span>{" "}
            & Speakers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Learn from the best minds in technology from the world's leading companies
          </p>
        </motion.div>

        {/* Company Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-black/60 backdrop-blur-lg rounded-xl p-6 flex items-center justify-center border border-orange-400/20 hover:border-orange-500/40 transition-all duration-300 shadow-neu-light dark:shadow-neu-dark hover:shadow-neu-glow"
            >
              <img
                src={company.logo}
                className="w-24 h-24 object-contain"
                alt={`Company ${index + 1}`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Expert Profiles & Global Reach */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Expert Profiles */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-black/60 backdrop-blur-lg rounded-2xl p-8 border border-orange-400/20 shadow-neu-light dark:shadow-neu-dark">
              <Star className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold mb-6 text-orange-500">
                Expert Profiles
              </h3>
              <div className="space-y-4">
                {expertTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-black/40 rounded-lg border border-orange-400/20"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{type}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Global Reach & Learning */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-black/60 backdrop-blur-lg rounded-2xl p-8 border border-orange-400/20 shadow-neu-light dark:shadow-neu-dark">
              <MapPin className="w-10 h-10 text-yellow-500 mb-4" />
              <h4 className="text-xl font-bold mb-3 text-yellow-500">Global Reach</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Speakers joining from Silicon Valley, Bangalore, London, Tokyo, and other major tech hubs worldwide.
              </p>
            </div>

            <div className="bg-white dark:bg-black/60 backdrop-blur-lg rounded-2xl p-8 border border-orange-400/20 shadow-neu-light dark:shadow-neu-dark">
              <h4 className="text-xl font-bold mb-4 text-orange-500">
                What You'll Learn
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>• Real-world applications of DSA in production systems</li>
                <li>• Career guidance and industry insights</li>
                <li>• Advanced problem-solving techniques</li>
                <li>• Latest trends in DeepTech development</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Neumorphic Shadow Styles */}
      <style>{`
        .shadow-neu-light {
          box-shadow: 6px 6px 16px rgba(0,0,0,0.08), -6px -6px 16px rgba(255,255,255,0.7);
        }
        .dark .shadow-neu-dark {
          box-shadow: 6px 6px 16px rgba(0,0,0,0.7), -6px -6px 16px rgba(255,165,0,0.08);
        }
        .hover\\:shadow-neu-glow:hover {
          box-shadow: 8px 8px 25px rgba(255,165,0,0.4), -8px -8px 25px rgba(255,255,255,0.1);
        }
      `}</style>
    </section>
  );
};

export default IndustryExperts;
