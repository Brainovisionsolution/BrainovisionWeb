import React from 'react';
import { Clock, Users, Award, Briefcase } from 'lucide-react';

const WhyThisCourse: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: 'Learn without quitting your job',
      description: 'Flexible scheduling designed around your work commitments',
    },
    {
      icon: Users,
      title: 'Weekend / Evening live sessions',
      description: 'Interactive classes when you\'re available to focus and learn',
    },
    {
      icon: Award,
      title: 'Personalized mentorship from top engineers',
      description: '1:1 guidance from professionals at Google, Amazon, and other top companies',
    },
    {
      icon: Briefcase,
      title: 'Industry-relevant capstone projects',
      description: 'Build real-world applications that showcase your skills to employers',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why This Course for{' '}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Working Professionals?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Designed specifically for busy professionals who want to advance their careers 
            without taking a break from work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-yellow-50 dark:hover:from-orange-900/20 dark:hover:to-yellow-900/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-orange-100">Learning Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-orange-100">Placement Assistance</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Lifetime</div>
              <div className="text-orange-100">Community Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisCourse;