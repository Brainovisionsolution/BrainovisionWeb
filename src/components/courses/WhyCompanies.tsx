import React from 'react';
import { Target, Users, Trophy, Zap } from 'lucide-react';

interface WhyCompaniesProps {
  darkMode: boolean;
}

const WhyCompanies: React.FC<WhyCompaniesProps> = ({ darkMode }) => {
  const reasons = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Real-World Project Experience',
      description: 'Candidates are trained through live projects and product-based workflows from day one.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Custom Talent Development',
      description: 'We align candidate training with specific partner needs, ensuring a perfect skill match.',
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'High Retention Rate',
      description: 'Our hires adapt quickly and stay longer thanks to holistic mentorship and onboarding.',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Job-Ready from Day One',
      description: 'Candidates possess sharp technical and communication skills needed for fast team integration.',
    },
  ];

  const companyTestimonials = [
    {
      company: 'Tech Mahindra',
      testimonial:
        'Brainovision’s talent pool is consistently impressive. Candidates have practical exposure and strong fundamentals.',
      person: 'Ravi Kumar, Sr. Recruitment Lead',
    },
    {
      company: 'Infosys',
      testimonial:
        'We appreciate Brainovision’s tailored training. Their learners show remarkable ownership and adaptability.',
      person: 'Neha Singh, HR Manager',
    },
    {
      company: 'Wipro',
      testimonial:
        'Hiring from Brainovision saves us ramp-up time. They’re prepared, proactive, and professional.',
      person: 'Arjun Mehta, Talent Acquisition Partner',
    },
  ];

  return (
    <section
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Why Companies Choose Brainovision Talent
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Brainovision-trained candidates stand out for their applied skills, industry exposure, and work readiness.
          </p>
        </div>

        {/* Reasons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`p-8 rounded-3xl text-center transition-all duration-500 hover:scale-105 ${
                darkMode
                  ? 'bg-gray-900 shadow-dark-neumorphism hover:shadow-dark-neumorphism-hover'
                  : 'bg-gray-50 shadow-neumorphism hover:shadow-neumorphism-hover'
              }`}
            >
              <div
                className={`mb-6 flex justify-center transition-all duration-300 ${
                  darkMode ? 'text-yellow-400' : 'text-orange-500'
                }`}
              >
                {reason.icon}
              </div>

              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {reason.title}
              </h3>

              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{reason.description}</p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default WhyCompanies;
