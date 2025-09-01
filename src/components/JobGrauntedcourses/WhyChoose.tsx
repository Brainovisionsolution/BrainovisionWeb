import React from 'react';
import {
  Shield,
  Users,
  Award,
  Clock,
  UserCheck,
  Briefcase,
  Target,
  FileText,
  HeartHandshake,
} from 'lucide-react';

export default function WhyChoose() {
  const features = [
    {
      icon: Clock,
      title: '350+ Hours Training',
      description: 'Comprehensive hands-on training with industry standards',
      highlight: 'Live Sessions',
    },
    {
      icon: Award,
      title: 'Industry Mentors',
      description: 'Learn from Google, Microsoft, TCS experts',
      highlight: 'FAANG Experience',
    },
    {
      icon: UserCheck,
      title: 'Career Coaching',
      description: 'Personalized guidance from Day 1',
      highlight: '1:1 Sessions',
    },
    {
      icon: Briefcase,
      title: 'Real Projects',
      description: 'Build portfolio with industry projects',
      highlight: 'Live Experience',
    },
    {
      icon: Target,
      title: 'Mock Interviews',
      description: 'Practice with real recruiters',
      highlight: 'HR Panel',
    },
    {
      icon: Shield,
      title: '100% Job Assurance',
      description: 'Get placed or get refund with our job guarantee program',
      highlight: 'T&C apply',
    },
    {
      icon: Users,
      title: 'Company-level Standards',
      description: 'Learn coding practices used in top tech companies',
      highlight: 'Industry Grade',
    },
    {
      icon: FileText,
      title: 'Weekly Resume Reviews',
      description: 'Professional resume building and LinkedIn optimization',
      highlight: 'ATS Optimized',
    },
    {
      icon: HeartHandshake,
      title: 'Soft Skills Training',
      description: 'Communication, leadership and interview preparation',
      highlight: 'Personality Dev',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Why Choose Our{' '}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Premium Program?
            </span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            We don't just teach technology, we build careers. Our comprehensive approach ensures you're job-ready from day
            one with guaranteed placement support.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="relative group bg-white rounded-2xl p-6 shadow-neumorphism-light dark:bg-gray-800 dark:shadow-neumorphism-dark
                  hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                {/* Icon container */}
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors duration-200">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{feature.description}</p>

                {/* Highlight badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold shadow">
                  {feature.highlight}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 p-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl shadow-xl max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white font-semibold tracking-wide select-none">
          <div>
            <Award className="w-8 h-8 mx-auto mb-2" />
            <div className="text-3xl">100%</div>
            <div className="text-orange-100 text-sm">Job Assurance*</div>
          </div>
          <div>
            <Clock className="w-8 h-8 mx-auto mb-2" />
            <div className="text-3xl">350+</div>
            <div className="text-orange-100 text-sm">Training Hours</div>
          </div>
          <div>
            <Briefcase className="w-8 h-8 mx-auto mb-2" />
            <div className="text-3xl">15+</div>
            <div className="text-orange-100 text-sm">Live Projects</div>
          </div>
          <div>
            <UserCheck className="w-8 h-8 mx-auto mb-2" />
            <div className="text-3xl">24/7</div>
            <div className="text-orange-100 text-sm">Career Support</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .shadow-neumorphism-light {
          box-shadow:
            6px 6px 12px #d9d9d9,
            -6px -6px 12px #ffffff;
        }
        .shadow-neumorphism-dark {
          box-shadow:
            6px 6px 12px #1a1a1a,
            -6px -6px 12px #2b2b2b;
        }
      `}</style>
    </section>
  );
}
