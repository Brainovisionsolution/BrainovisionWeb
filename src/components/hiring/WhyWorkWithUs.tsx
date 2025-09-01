import React from 'react';
import { Home, DollarSign, BookOpen, TrendingUp, Clock, Users } from 'lucide-react';

interface WhyWorkWithUsProps {
  isDark: boolean;
}

const WhyWorkWithUs: React.FC<WhyWorkWithUsProps> = ({ isDark }) => {
  const benefits = [
    {
      icon: Home,
      title: 'Remote Friendly',
      description: 'Work from anywhere with flexible remote options and hybrid arrangements.',
    },
    {
      icon: DollarSign,
      title: 'Great Pay',
      description: 'Competitive salaries with performance bonuses and equity options.',
    },
    {
      icon: BookOpen,
      title: 'Learning Budget',
      description: 'Annual learning budget for courses, conferences, and skill development.',
    },
    {
      icon: TrendingUp,
      title: 'Growth-Oriented Culture',
      description: 'Clear career progression paths with mentorship and growth opportunities.',
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Work-life balance with flexible schedules and unlimited PTO policy.',
    },
    {
      icon: Users,
      title: 'Amazing Team',
      description: 'Collaborative environment with brilliant colleagues and inclusive culture.',
    },
  ];

  return (
    <section className={`py-16 transition-all duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Why Work With Us?</h2>
          <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Join a company that values your growth, well-being, and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                isDark 
                  ? 'bg-gray-900 shadow-neumorphic-dark hover:shadow-neumorphic-dark-hover' 
                  : 'bg-gray-100 shadow-neumorphic-light hover:shadow-neumorphic-light-hover'
              }`}
            >
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-800 shadow-neumorphic-dark' 
                  : 'bg-white shadow-neumorphic-light'
              }`}>
                <benefit.icon className={`w-8 h-8 transition-colors duration-300 ${
                  isDark ? 'text-yellow-400' : 'text-orange-600'
                }`} />
              </div>
              <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>{benefit.title}</h3>
              <p className={`leading-relaxed transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;