import React from 'react';
import { Search, Palette, Code, Rocket, Headphones } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'We analyze your requirements, understand your business goals, and define the project scope.',
      details: ['Requirements Analysis', 'Market Research', 'Technical Feasibility']
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Creating user-centered designs with prototypes, wireframes, and comprehensive UI/UX planning.',
      details: ['UI/UX Design', 'Prototyping', 'Design System']
    },
    {
      icon: Code,
      title: 'Develop',
      description: 'Agile development with regular updates, code reviews, and continuous integration practices.',
      details: ['Agile Development', 'Code Reviews', 'Quality Assurance']
    },
    {
      icon: Rocket,
      title: 'Deploy',
      description: 'Seamless deployment with performance optimization, security testing, and go-live support.',
      details: ['Performance Testing', 'Security Audit', 'Production Deployment']
    },
    {
      icon: Headphones,
      title: 'Support',
      description: 'Ongoing maintenance, updates, and 24/7 technical support to ensure optimal performance.',
      details: ['24/7 Support', 'Regular Updates', 'Performance Monitoring']
    }
  ];

  return (
    <section id="process" className="py-24 bg-white dark:bg-[#1A0E00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 dark:text-white mb-4">
            Our Development Process
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery from concept to launch
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-orange-500 to-yellow-500 dark:from-yellow-500 dark:to-orange-500 hidden lg:block"></div>

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-yellow-50 dark:bg-[#2B1700] rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white mr-4">
                        <step.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-semibold font-montserrat text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-orange-500 dark:bg-yellow-500 rounded-full mr-3"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                    {index + 1}
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
