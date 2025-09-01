import React from 'react';
import {
  Users, Award, Clock, Globe, MessageCircle, TrendingUp, BookOpen, HeartHandshake
} from 'lucide-react';

const WhyBrainovision: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Mentors',
      description: 'Learn from professionals working at Google, Amazon, Microsoft, and top startups'
    },
    {
      icon: Award,
      title: 'Industry-Recognized Certificates',
      description: 'AICTE-affiliated and ISO certified programs recognized by leading companies'
    },
    {
      icon: TrendingUp,
      title: 'Real-World Projects',
      description: 'Build portfolio-worthy projects that showcase your skills to potential employers'
    },
    {
      icon: MessageCircle,
      title: '1-on-1 Doubt Sessions',
      description: 'Personal mentorship with dedicated doubt-clearing sessions and career guidance'
    },
    {
      icon: Clock,
      title: 'Lifetime Access',
      description: 'Keep learning with lifetime access to course materials and community updates'
    },
    {
      icon: HeartHandshake,
      title: 'Career Support',
      description: 'Complete placement assistance with resume building and interview preparation'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Join 25,000+ learners in our active Discord and WhatsApp communities'
    },
    {
      icon: BookOpen,
      title: 'Updated Curriculum',
      description: 'Stay ahead with curriculum updated every quarter based on industry trends'
    }
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-neutral-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Brainovision?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            We don’t just teach technology — we transform careers. Here’s what makes us different.
          </p>
        </div>

        {/* Glass Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, description }, i) => (
            <div
              key={i}
              className="group bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-yellow-100 dark:border-yellow-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-md">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors">
                  {title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-500/10 dark:to-orange-400/10 rounded-3xl p-8 md:p-12 border border-yellow-200 dark:border-yellow-600">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">25,000+</div>
              <div className="text-gray-700 dark:text-gray-300">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">95%</div>
              <div className="text-gray-700 dark:text-gray-300">Placement Success</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-gray-700 dark:text-gray-300">Hiring Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">4.9/5</div>
              <div className="text-gray-700 dark:text-gray-300">Student Rating</div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 italic max-w-4xl mx-auto">
            "Brainovision doesn't just teach you to code — they teach you to think like a developer, 
            solve real problems, and build a career that matters."
          </blockquote>
          <div className="mt-6">
            <cite className="text-orange-500 font-semibold">– Priya Sharma, Software Engineer at Google</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBrainovision;
