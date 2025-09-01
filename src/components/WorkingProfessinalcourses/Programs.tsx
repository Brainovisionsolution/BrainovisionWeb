import React from 'react';
import { ArrowRight, Clock, Monitor, Briefcase, Zap, UserCheck, TrendingUp, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface Program {
  id: string;
  title: string;
  duration: string;
  mode: string;
  fees: string;
  emi: string;
  description: string;
  highlights: string[];
  idealFor: string;
  tag?: string;
}

const Programs: React.FC = () => {
  const programs: Program[] = [
    {
      id: '1',
      title: 'AI & ML Accelerator Program',
      duration: 'Weekends (8 Months)',
      mode: 'Live Online + Recorded',
      fees: '₹85,000',
      emi: '₹4,999/month',
      description: 'Master AI/ML without quitting your job. Designed for professionals who want to transition into AI roles.',
      highlights: [
        'Evening & weekend classes',
        '1:1 Career mentoring',
        'Resume & interview prep',
        'Capstone project for portfolio'
      ],
      idealFor: 'IT professionals looking to transition to AI/ML roles',
      tag: '🔥 Most Popular'
    },
    {
      id: '2',
      title: 'Executive AI Leadership Program',
      duration: 'Flexible (10 Months)',
      mode: 'Hybrid (Online + Workshops)',
      fees: '₹1,25,000',
      emi: '₹7,499/month',
      description: 'For mid-career professionals aiming for AI leadership positions and strategic roles.',
      highlights: [
        'Case-study based learning',
        'Executive coaching sessions',
        'Industry networking',
        'Leadership capstone'
      ],
      idealFor: 'Managers/Leaders driving AI adoption'
    },
    {
      id: '3',
      title: 'AI for Working Professionals',
      duration: 'Self-paced (6-9 Months)',
      mode: 'Recorded + Live Doubt Solving',
      fees: '₹75,000',
      emi: '₹4,499/month',
      description: 'Flexible AI upskilling program designed around your work schedule.',
      highlights: [
        'Learn at your own pace',
        'Weekly mentor check-ins',
        'Real-work applications',
        'Certificate from IIT Faculty'
      ],
      idealFor: 'Professionals needing flexible learning'
    },
    {
      id: '4',
      title: 'Generative AI Specialist',
      duration: 'Weeknights (6 Months)',
      mode: 'Live Online Intensive',
      fees: '₹95,000',
      emi: '₹5,999/month',
      description: 'Fast-track program to master LLMs, GPT, and cutting-edge GenAI applications.',
      highlights: [
        '7-10pm weeknight schedule',
        'Hands-on with production models',
        'Portfolio of GenAI projects',
        'Job placement assistance'
      ],
      idealFor: 'Developers building GenAI solutions',
      tag: '✨ New'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-orange-500 font-semibold uppercase tracking-wide mb-2">
            🚀 Future-Proof Your Career
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Career-Advancing Programs for{' '}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Working Professionals
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed for professionals who want to upskill without career breaks
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Briefcase, title: "Career-Focused", desc: "Curriculum aligned with industry needs" },
            { icon: Clock, title: "Flexible Schedule", desc: "Learn after work hours" },
            { icon: UserCheck, title: "1:1 Mentoring", desc: "Personalized career guidance" },
            { icon: TrendingUp, title: "Salary Boost", desc: "Average 40-60% hike post-completion" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={cardVariants}
              className="bg-white p-6 rounded-xl border border-orange-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Program Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {programs.map((program) => (
            <motion.div
              key={program.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300"
            >
              <div className="p-8 relative">
                {/* Tag Badge */}
                {program.tag && (
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1 text-xs font-semibold rounded-full shadow">
                    {program.tag}
                  </span>
                )}

                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                    <p className="text-orange-500 font-medium">{program.idealFor}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">{program.description}</p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Program Highlights</h4>
                  <ul className="space-y-2">
                    {program.highlights.map((h, i) => (
                      <li key={i} className="flex items-start">
                        <Zap className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <Clock className="h-5 w-5 text-orange-500" />
                      <span className="text-sm font-medium text-gray-700">Duration</span>
                    </div>
                    <p className="text-gray-900 font-medium">{program.duration}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <Monitor className="h-5 w-5 text-orange-500" />
                      <span className="text-sm font-medium text-gray-700">Format</span>
                    </div>
                    <p className="text-gray-900 font-medium">{program.mode}</p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <span className="text-gray-500 text-sm">Total Investment</span>
                      <p className="text-2xl font-bold text-gray-900">{program.fees}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-500 text-sm">EMI starts at</span>
                      <p className="text-green-600 font-bold">{program.emi}</p>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 px-6 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200 font-semibold flex items-center justify-center group">
                    Apply & Reserve Seat
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-2">⚡ Limited seats available</p>
                </div>
              </div>
              <div className="h-2 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 border border-orange-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need help choosing the right program?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Schedule a free 1:1 career consultation with our program advisors
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all shadow-lg">
                Book Free Consultation
              </button>
              <button className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all">
                Compare Programs
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
