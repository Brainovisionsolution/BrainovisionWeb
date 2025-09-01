import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Network, DollarSign, Award, Megaphone } from 'lucide-react';

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
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Benefits for <span className="text-orange-500 dark:text-orange-400">Host Departments & Faculty Coordinators</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
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
              className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-white/5 dark:to-white/10 rounded-2xl p-8 border border-orange-300/30 dark:border-orange-400/30 hover:border-orange-400/50 transition-all duration-300 group shadow-neu-light dark:shadow-neu-dark"
            >
              <div className="bg-orange-100 dark:bg-orange-400/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 dark:group-hover:bg-orange-500/30 transition-all duration-300">
                <benefit.icon className="w-8 h-8 text-orange-500 dark:text-orange-400" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-center text-gray-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                {benefit.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-center mb-4 text-sm leading-relaxed">
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

        {/* Neumorphism Styles */}
        <style>
          {`
            .shadow-neu-light {
              box-shadow: 6px 6px 16px rgba(0,0,0,0.08), -6px -6px 16px rgba(255,255,255,0.8);
            }
            .shadow-neu-dark {
              box-shadow: 6px 6px 16px rgba(0,0,0,0.4), -6px -6px 16px rgba(255,255,255,0.05);
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default HostBenefits;
