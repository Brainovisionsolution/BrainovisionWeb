import React from 'react';
import { Users, UserCheck, Briefcase, BookOpen, MessageCircle } from 'lucide-react';

const CourseHighlights: React.FC = () => {
  const highlights = [
    {
      icon: Users,
      title: 'Live sessions by top mentors',
      description: 'Learn from engineers at Google, Amazon, Microsoft, and other top companies',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: UserCheck,
      title: '1:1 Mentorship',
      description: 'Personal guidance and career advice from industry experts',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Briefcase,
      title: 'Career Support',
      description: 'Resume building, mock interviews, and job placement assistance',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: BookOpen,
      title: 'Capstone Projects',
      description: 'Build real-world applications using industry datasets and best practices',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: MessageCircle,
      title: 'Weekly Assignments & Feedback',
      description: 'Structured learning with regular assessments and personalized feedback',
      color: 'from-pink-500 to-rose-600',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Course{' '}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Highlights
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to succeed in your tech career transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full">
                <div className="mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${highlight.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <highlight.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature showcase */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Learn from the Best in the Industry
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our mentors are current employees at top tech companies with years of experience 
                in building scalable systems and leading engineering teams.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Google', 'Amazon', 'Microsoft', 'Meta', 'Netflix', 'Uber'].map((company) => (
                  <div
                    key={company}
                    className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm"
                  >
                    {company}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {[
                { metric: '500+', label: 'Hours of Content' },
                { metric: '50+', label: 'Industry Projects' },
                { metric: '24/7', label: 'Support Available' },
              ].map((item) => (
                <div key={item.label} className="flex items-center space-x-4">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                    {item.metric}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;