import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Star } from "lucide-react"; // modern icons

interface TeamProps {
  darkMode?: boolean;
}

const Team: React.FC<TeamProps> = ({ darkMode = false }) => {
  const theme = {
    bg: darkMode ? 'bg-gray-900' : 'bg-gray-50',
    cardBg: darkMode ? 'bg-gray-800' : 'bg-white',
    text: darkMode ? 'text-white' : 'text-gray-900',
    subText: darkMode ? 'text-gray-300' : 'text-gray-600',
    accent: darkMode ? 'from-orange-400 to-yellow-500' : 'from-orange-500 to-yellow-500',
    border: darkMode ? 'border-gray-700' : 'border-gray-200',
    shadow: darkMode ? 'shadow-gray-900/30' : 'shadow-orange-100/30',
    iconBg: darkMode ? 'bg-gray-700' : 'bg-orange-100',
    checkColor: darkMode ? '#f59e0b' : '#ea580c'
  };

  const boxes = [
    {
      title: 'Top-Tier Faculty',
      points: [
        'Our trainers come from premier institutions and have years of industry experience.',
        'IITs (Indian Institutes of Technology)',
        'IIITs (International Institutes of Information Technology)',
        'NITs and Globally Recognized Universities',
      ],
      icon: <GraduationCap className="w-10 h-10 text-orange-500" />,
      gradient: 'from-orange-500 to-orange-400'
    },
    {
      title: 'Trainer Highlights',
      points: [
        'Industry Experience – Deep technical expertise in AI, ML, NLP, and Data Science from working at top companies',
        'Teaching Excellence – Mentored 3000+ students into careers at leading tech companies',
        'Hands-On Approach – Focus on practical implementation, not just theoretical concepts',
        'Industry Connections – Helps open doors for placements and internships through professional networks',
      ],
      icon: <Star className="w-10 h-10 text-yellow-500" />,
      gradient: 'from-yellow-500 to-yellow-400'
    },
    {
      title: 'Company Experience',
      points: [
        'V – VIRTUSA',
        'B – Broadridge',
        'V – ValueMomentum',
        'T – Tech Startups',
      ],
      icon: <Briefcase className="w-10 h-10 text-orange-500" />,
      gradient: 'from-orange-500 to-orange-400'
    },
  ];

  return (
    <section className={`relative py-24 ${theme.bg} transition-colors duration-300`}>
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-orange-400 to-yellow-500 opacity-20 blur-3xl rounded-full -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${theme.text}`}
          >
            Learn from{" "}
            <span className={`bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent`}>
              India's Top Educators
            </span>{" "}
            & Industry Experts
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto h-1 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-xl max-w-3xl mx-auto ${theme.subText} leading-relaxed`}
          >
            Our mentors combine academic excellence with real-world experience to shape your tech career
          </motion.p>
        </div>

        {/* Boxes Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {boxes.map((box, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, rotateX: 2, rotateY: -2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-xl p-8 flex flex-col h-full transition-all duration-300 ${theme.cardBg} border ${theme.border} shadow-lg ${theme.shadow} hover:shadow-xl`}
            >
              {/* Icon */}
              <div className="mb-6 relative z-10">{box.icon}</div>

              <h3 className={`text-2xl font-bold mb-6 relative z-10 ${theme.text}`}>
                {box.title}
              </h3>

              <ul className="space-y-4 relative z-10 flex-1">
                {box.points.map((point, i) => (
                  <motion.li 
                    key={i} 
                    className={`flex items-start ${theme.subText}`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + (i * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <span className={`flex-shrink-0 mt-1 mr-3 inline-block w-5 h-5 rounded-full ${theme.iconBg} flex items-center justify-center`}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" 
                        stroke={theme.checkColor} strokeWidth="3" 
                        strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom Accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1.5 rounded-b-xl bg-gradient-to-r ${box.gradient}`}></div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button className={`relative px-8 py-3.5 rounded-lg font-medium text-lg bg-gradient-to-r ${theme.accent} text-white shadow-lg overflow-hidden group`}>
            <span className="relative z-10">Meet Our Faculty →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
