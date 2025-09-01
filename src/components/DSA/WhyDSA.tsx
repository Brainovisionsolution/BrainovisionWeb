import React from "react";
import { motion } from "framer-motion";
import { Brain, Cpu, Shield, Database, Zap, Network } from "lucide-react";

const WhyDSA: React.FC = () => {
  const technologies = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description:
        "Neural networks, optimization algorithms, and intelligent systems",
      color: "from-orange-400 to-yellow-400",
    },
    {
      icon: Database,
      title: "Machine Learning",
      description: "Data structures for efficient training and inference",
      color: "from-pink-400 to-orange-400",
    },
    {
      icon: Network,
      title: "Blockchain",
      description: "Merkle trees, hash tables, and distributed algorithms",
      color: "from-yellow-400 to-amber-500",
    },
    {
      icon: Cpu,
      title: "Quantum Computing",
      description: "Quantum algorithms and computational complexity",
      color: "from-orange-500 to-red-400",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Cryptographic algorithms and secure data structures",
      color: "from-red-500 to-orange-400",
    },
    {
      icon: Zap,
      title: "IoT & Robotics",
      description: "Real-time algorithms and efficient data processing",
      color: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              DSA for DeepTech
            </span>
            ?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Data Structures and Algorithms form the backbone of all modern
            DeepTech innovations. Master the fundamentals that power tomorrow's
            breakthrough technologies.
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group bg-white dark:bg-black/60 shadow-neu-light dark:shadow-neu-dark rounded-3xl p-8 border border-orange-400/20 transition-all duration-300 hover:shadow-neu-glow cursor-pointer"
            >
              <div
                className={`bg-gradient-to-r ${tech.color} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <tech.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center group-hover:text-orange-500 transition-colors">
                {tech.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Core Learning Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-white dark:bg-black/60 shadow-neu-light dark:shadow-neu-dark rounded-3xl p-8 md:p-12 border border-orange-400/30">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-orange-500">
              🧠 Core Learning Outcomes
            </h3>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-yellow-500">
                  Technical Mastery
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
                  <li>Advanced algorithmic problem-solving</li>
                  <li>Optimization techniques for complex systems</li>
                  <li>Data structure design for scalability</li>
                  <li>Time and space complexity analysis</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-yellow-500">
                  Industry Readiness
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
                  <li>Interview preparation for top tech companies</li>
                  <li>Research-oriented thinking for innovation</li>
                  <li>Collaborative problem-solving skills</li>
                  <li>Foundation for advanced DeepTech careers</li>
                </ul>
              </div>
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
            box-shadow: 10px 10px 20px rgba(0,0,0,0.7), -10px -10px 20px rgba(255,165,0,0.08);
          }
          .hover\\:shadow-neu-glow:hover {
            box-shadow: 0 15px 30px rgba(255,165,0,0.4), 0 15px 30px rgba(255,255,255,0.1);
          }
        `}
      </style>
    </section>
  );
};

export default WhyDSA;
