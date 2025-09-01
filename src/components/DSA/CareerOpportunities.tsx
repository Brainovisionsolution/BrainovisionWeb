import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, Database, Brain, Globe, Smartphone, Zap, Users, TrendingUp, DollarSign, Trophy } from "lucide-react";

const CareerOpportunities: React.FC = () => {
  const careers = [
    {
      icon: Code,
      title: "Software Engineer",
      description: "Build scalable applications and systems",
      salary: "$80K - $150K",
      companies: ["Google", "Microsoft", "Amazon"]
    },
    {
      icon: Brain,
      title: "ML Engineer",
      description: "Develop machine learning models and AI systems",
      salary: "$90K - $180K",
      companies: ["OpenAI", "Tesla", "NVIDIA"]
    },
    {
      icon: Database,
      title: "Data Scientist",
      description: "Extract insights from complex datasets",
      salary: "$75K - $140K",
      companies: ["Meta", "Netflix", "Uber"]
    },
    {
      icon: Globe,
      title: "Full Stack Developer",
      description: "End-to-end web and mobile applications",
      salary: "$70K - $130K",
      companies: ["Airbnb", "Spotify", "Slack"]
    },
    {
      icon: Smartphone,
      title: "Freelance Developer",
      description: "Independent projects and consultancy",
      salary: "$50 - $200/hr",
      companies: ["Upwork", "Toptal", "Freelancer"]
    },
    {
      icon: Briefcase,
      title: "DeepTech Specialist",
      description: "Cutting-edge technology research and development",
      salary: "$100K - $200K+",
      companies: ["IBM", "Intel", "Quantum"]
    }
  ];

  const programMatters = [
    {
      icon: Zap,
      title: "Future of Jobs",
      description: "80% of interviews at product-based companies like Google, Microsoft, Amazon emphasize DSA."
    },
    {
      icon: Globe,
      title: "Global Recognition",
      description: "Internationally valid certificates & participation in an Asia Record initiative."
    },
    {
      icon: Users,
      title: "Impact at Scale",
      description: "Preparing 1,00,000+ students worldwide to become job-ready problem solvers."
    },
    {
      icon: TrendingUp,
      title: "Proven Career Advantage",
      description: "Strong DSA skills double employability and accelerate career growth."
    },
    {
      icon: DollarSign,
      title: "High-Paying Careers",
      description: "Salaries range from ₹6 LPA (freshers) to ₹1 Cr+ in senior DeepTech roles."
    },
    {
      icon: Trophy,
      title: "Be Part of History",
      description: "Join a record-breaking global education movement with 500+ departments and 5 lakh learners."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* Career Opportunities Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-yellow-300">
            Career <span className="text-orange-500">Opportunities</span> Enabled
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 dark:text-yellow-200 max-w-3xl mx-auto">
            Master DSA and unlock doors to the most sought-after careers in technology
          </p>
        </motion.div>

        {/* Career Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {careers.map((career, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-orange-400/30 
                         shadow-neu-light dark:shadow-neu-dark hover:border-orange-400/50 transition-all duration-300 group"
            >
              <div className="bg-orange-400/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-400/30 transition-all duration-300">
                <career.icon className="w-8 h-8 text-orange-500" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-center group-hover:text-orange-500 transition-colors text-gray-900 dark:text-yellow-300">
                {career.title}
              </h3>

              <p className="text-gray-700 dark:text-yellow-200 text-center mb-4 text-sm leading-relaxed">
                {career.description}
              </p>

              <div className="text-center mb-4">
                <span className="text-orange-500 font-bold text-lg">{career.salary}</span>
                <p className="text-xs text-gray-500 dark:text-yellow-300">Average Salary Range</p>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {career.companies.map((company, idx) => (
                  <span
                    key={idx}
                    className="bg-orange-400/10 dark:bg-gray-800 text-xs px-3 py-1 rounded-full 
                               text-gray-800 dark:text-yellow-200"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why This Program Matters Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-yellow-300 text-center">
            Why This <span className="text-orange-400">Program Matters</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programMatters.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/50 dark:bg-black/50 backdrop-blur-lg rounded-2xl p-6 border border-orange-400/20 shadow-neu hover:border-green-400/40 transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <item.icon className="w-10 h-10 text-ornage-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-center text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

         {/* Limited Time Offer */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.02 }}
  transition={{ type: "spring", stiffness: 120 }}
  className="mt-12 p-8 bg-gradient-to-r from-orange-500/20 via-yellow-400/20 to-green-400/20 
             backdrop-blur-lg rounded-3xl border border-orange-400/30 shadow-neu text-center relative overflow-hidden"
>
  {/* Animated background glow */}
  <span className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[200%] bg-gradient-to-r from-yellow-400 via-orange-400 to-green-400 opacity-20 blur-3xl animate-animateGlow rounded-full pointer-events-none"></span>

  <p className="text-2xl font-bold text-white mb-4">
    ⏰ Early Bird Pricing Ends
  </p>

  <p className="text-3xl font-extrabold text-orange-400 mb-4 animate-pulse">
    October 10, 2025
  </p>

  <p className="text-white/80 text-sm md:text-base">
    Don’t miss this opportunity to be part of a record-breaking global education movement!
  </p>
</motion.div>
        </motion.div>
      </div>

      {/* Neumorphic Shadows */}
      <style jsx>{`
        .shadow-neu-light {
          box-shadow: 6px 6px 10px #e5e5e5, -6px -6px 12px #ffffff;
        }
        .shadow-neu-dark {
          box-shadow: 6px 6px 10px #0f0f0f, -6px -6px 12px #1c1c1c;
        }
        .hover\\:shadow-neu:hover {
          box-shadow: 6px 6px 10px #e5e5e5, -6px -6px 12px #ffffff;
        }
      `}</style>
    </section>
  );
};

export default CareerOpportunities;
