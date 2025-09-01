import React from 'react';
import { ExternalLink, Calendar, TrendingUp } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: 'FinTech Mobile App',
      client: 'SecurePay Solutions',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile Development',
      duration: '4 months',
      results: [
        '300% increase in user engagement',
        '99.9% uptime achievement',
        '50% reduction in transaction time'
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
      description: 'Built a secure mobile banking application with biometric authentication and real-time transaction processing.'
    },
    {
      title: 'E-learning Platform',
      client: 'EduTech Pro',
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web Development',
      duration: '6 months',
      results: [
        '10,000+ active students',
        '95% course completion rate',
        '40% faster content delivery'
      ],
      technologies: ['React', 'Django', 'PostgreSQL', 'Redis'],
      description: 'Developed a comprehensive learning management system with video streaming, interactive quizzes, and progress tracking.'
    },
    {
      title: 'Healthcare CRM',
      client: 'MedCare Systems',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Enterprise Software',
      duration: '8 months',
      results: [
        '60% faster patient processing',
        'HIPAA compliant system',
        '25% cost reduction'
      ],
      technologies: ['Angular', 'Java Spring', 'MySQL', 'Docker'],
      description: 'Created a HIPAA-compliant customer relationship management system for healthcare providers.'
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#1A0E00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 dark:text-white mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their ideas into successful digital solutions
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-[#2B1700] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-orange-500/90 dark:bg-yellow-500/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                    {study.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold font-montserrat text-gray-900 dark:text-white">
                    {study.title}
                  </h3>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-orange-500 dark:group-hover:text-yellow-500 transition-colors" />
                </div>

                <p className="text-orange-500 dark:text-yellow-400 font-medium mb-2">
                  {study.client}
                </p>

                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{study.duration}</span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {study.description}
                </p>

                {/* Key Results */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
                    Key Results
                  </h4>
                  <ul className="space-y-1">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-yellow-50 dark:bg-[#1A0E00] text-gray-700 dark:text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 dark:from-yellow-500 dark:to-orange-500 hover:from-orange-600 hover:to-yellow-600 dark:hover:from-yellow-600 dark:hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
