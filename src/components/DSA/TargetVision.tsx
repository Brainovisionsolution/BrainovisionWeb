import React from "react";
import { motion } from "framer-motion";
import { Star, Users, Network, DollarSign, Award, Megaphone } from "lucide-react";

const HostBenefits: React.FC = () => {
  const benefits = [
    {
      icon: Star,
      title: "Global Recognition",
      description: "Global academic recognition for your institution",
      value: "Priceless Exposure"
    },
    {
      icon: Users,
      title: "Faculty Leadership",
      description: "Faculty leadership & mentorship opportunities",
      value: "Professional Growth"
    },
    {
      icon: Network,
      title: "Networking Hub",
      description: "Networking with industry leaders & 500+ institutions",
      value: "Lifetime Network"
    },
    {
      icon: DollarSign,
      title: "Cash Prizes",
      description: "Certificates, Awards & Cash Prizes",
      value: "₹2–5 Lakhs"
    },
    {
      icon: Award,
      title: "Institutional Pride",
      description: "Stronger institutional brand & global visibility",
      value: "Recognition & Credibility"
    },
    {
      icon: Megaphone,
      title: "Brand Promotion",
      description: "Marketing exposure across all platforms",
      value: "₹1,00,000+ Worth"
    }
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
            Benefits for{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Host Departments & Faculty Coordinators
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-700 dark:text-gray-300 text-xl max-w-3xl mx-auto">
            Transform your institution and faculty into globally recognized leaders
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
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/50 dark:bg-black/50 backdrop-blur-lg rounded-2xl p-8 border border-orange-300/20 hover:border-orange-400/40 transition-all duration-300 shadow-neu group"
            >
              <div className="bg-gradient-to-r from-orange-400 to-yellow-400/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-orange-500 dark:text-yellow-400" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-center text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 text-center mb-4 text-sm leading-relaxed">
                {benefit.description}
              </p>
              
              <div className="text-center">
                <span className="inline-block bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent font-bold">
                  {benefit.value}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recognition & Financial Sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Recognition Package */}
          <div className="bg-white/50 dark:bg-black/50 backdrop-blur-lg rounded-3xl p-8 md:p-10 border border-orange-300/20 shadow-neu">
            <h3 className="text-2xl font-bold mb-6 text-orange-500">🏆 Recognition Package</h3>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <span>Official World Record Certificate for your institution</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <span>Faculty leadership & mentorship acknowledgment</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <span>Networking opportunities with global institutions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <span>Media coverage and promotional visibility</span>
              </li>
            </ul>
          </div>

          {/* Financial Incentives */}
          <div className="bg-white/50 dark:bg-black/50 backdrop-blur-lg rounded-3xl p-8 md:p-10 border border-orange-300/20 shadow-neu">
            <h3 className="text-2xl font-bold mb-6 text-yellow-500">💰 Financial Incentives</h3>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <span>Cash prizes for top performing departments & faculty</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <span>Certificates & Awards recognition</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <span>Revenue sharing & milestone bonuses</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <span>Investment only ₹999/- with massive returns</span>
              </li>
            </ul>
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

export default HostBenefits;
