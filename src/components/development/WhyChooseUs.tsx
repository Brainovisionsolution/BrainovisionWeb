import React from 'react';
import { BrainCircuit, Rocket, ShieldCheck, Users, Award, Headset, Sparkles } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: BrainCircuit,
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge artificial intelligence tailored to your business needs.',
      stats: '40+ AI models deployed'
    },
    {
      icon: Rocket,
      title: 'Rapid Implementation',
      description: 'From concept to production in record time without compromising quality.',
      stats: '2x faster deployment'
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Security',
      description: 'Military-grade encryption and compliance with global security standards.',
      stats: '100% security audit pass'
    },
    {
      icon: Users,
      title: 'Expert AI Team',
      description: 'PhD researchers and industry veterans with deep technical expertise.',
      stats: '15+ years avg experience'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Consistently delivering measurable business impact for our clients.',
      stats: '92% client retention'
    },
    {
      icon: Headset,
      title: 'Dedicated Support',
      description: '24/7 technical support with guaranteed response times.',
      stats: '<30 min response time'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-yellow-500 mr-3 animate-pulse" />
            <span className="text-sm font-semibold tracking-wider text-orange-500 uppercase">
              Why Choose Brainovision
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent mb-4">
            The AI Advantage
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transforming businesses with intelligent solutions powered by neuroscience-inspired AI
          </p>
        </div>

        {/* Features Grid - Neumorphic Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Neumorphic Card */}
              <div className="h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 transition-all duration-500 
                shadow-[10px_10px_20px_#d1d9e6,-10px_-10px_20px_#ffffff] dark:shadow-[10px_10px_20px_#111827,-10px_-10px_20px_#1f2937]
                hover:shadow-[15px_15px_30px_#d1d9e6,-15px_-15px_30px_#ffffff] dark:hover:shadow-[15px_15px_30px_#111827,-15px_-15px_30px_#1f2937]
                border border-white/50 dark:border-gray-700/50 hover:-translate-y-2"
              >
                {/* Floating Icon */}
                <div className="absolute -top-6 -right-6 opacity-10">
                  <feature.icon className="h-24 w-24 text-orange-500 dark:text-amber-400" />
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white 
                    shadow-[inset_3px_3px_6px_#d15807,inset_-3px_-3px_6px_#ff8a3d] group-hover:shadow-[inset_4px_4px_8px_#d15807,inset_-4px_-4px_8px_#ff8a3d] transition-all duration-300">
                    <feature.icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Stats */}
                <div className="mt-auto">
                  <div className="inline-flex px-4 py-2 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 
                    text-orange-600 dark:text-amber-400 text-sm font-semibold rounded-xl 
                    shadow-[3px_3px_6px_#d1d9e6,-3px_-3px_6px_#ffffff] dark:shadow-[3px_3px_6px_#111827,-3px_-3px_6px_#1f2937]">
                    {feature.stats}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Neumorphic */}
        <div className="mt-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-10 text-center 
          shadow-[15px_15px_30px_#d1d9e6,-15px_-15px_30px_#ffffff] dark:shadow-[15px_15px_30px_#111827,-15px_-15px_30px_#1f2937]
          border border-white/50 dark:border-gray-700/50">
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent mb-4">
            Ready for AI Transformation?
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with us to unlock your business potential with neuroscience-inspired AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl 
              shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#111827,-5px_-5px_10px_#1f2937]
              hover:shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] dark:hover:shadow-[8px_8px_16px_#111827,-8px_-8px_16px_#1f2937]
              transition-all duration-300 hover:-translate-y-1">
              Schedule Demo
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-orange-500 text-orange-500 dark:text-amber-400 font-semibold rounded-xl 
              shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#111827,-5px_-5px_10px_#1f2937]
              hover:bg-orange-500 hover:text-white transition-colors duration-300">
              Meet Our Team
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;