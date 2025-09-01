import React from 'react';
import { TrendingUp, Users, MapPin, Building } from 'lucide-react';

const CareerOutcomes: React.FC = () => {
  const outcomes = [
    { metric: '1200+', label: 'Professionals Placed', icon: Users },
    { metric: '80%', label: 'Average Salary Hike', icon: TrendingUp },
    { metric: '150+', label: 'Hiring Partners', icon: Building },
    { metric: '95%', label: 'Career Transition Success', icon: MapPin },
  ];

  const transitions = [
    'Software Developer',
    'Data Engineer',
    'Product Manager',
    'Tech Lead',
    'DevOps Engineer',
    'AI/ML Engineer',
  ];

  const hiringPartners = [
    'Google', 'Amazon', 'Microsoft', 'Flipkart', 'Oracle', 'TCS',
    'Infosys', 'Wipro', 'Accenture', 'Deloitte', 'IBM', 'Adobe',
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achieve Career Growth{' '}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Without Career Break
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of professionals who have successfully transitioned to their dream tech roles
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-yellow-50 dark:hover:from-orange-900/20 dark:hover:to-yellow-900/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <outcome.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {outcome.metric}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {outcome.label}
              </div>
            </div>
          ))}
        </div>

        {/* Career Transitions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Popular Career Transitions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {transitions.map((role, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-4 rounded-lg text-center font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                {role}
              </div>
            ))}
          </div>
        </div>

        {/* Hiring Partners */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Our Hiring Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {hiringPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center font-semibold text-gray-700 dark:text-gray-300 hover:text-orange-500"
              >
                {partner}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              And 100+ more companies actively hiring our graduates
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-3 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200 font-semibold">
              View All Hiring Partners
            </button>
          </div>
        </div>

        {/* Success Story Highlight */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Real Success Stories
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our alumni have successfully transitioned from various backgrounds - from traditional 
              IT services to product companies, from non-tech roles to engineering positions.
            </p>
            <button className="border-2 border-orange-500 text-orange-500 dark:text-orange-400 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 transition-all duration-200 font-semibold">
              Read More Success Stories
            </button>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <blockquote className="text-gray-700 dark:text-gray-300 mb-4">
              "The flexible schedule allowed me to learn while working at Infosys. 
              After 8 months, I landed a role as a Full Stack Developer at Flipkart 
              with a 120% salary increase!"
            </blockquote>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Rajesh Kumar</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer at Flipkart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerOutcomes;