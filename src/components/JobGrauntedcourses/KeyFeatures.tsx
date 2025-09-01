import React from 'react';
import { Shield, Clock, Briefcase, Users, FileText, HeartHandshake } from 'lucide-react';

export default function KeyFeatures() {
  const features = [
    
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Key </span>
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need to transform from a student to a working professional 
            with guaranteed career outcomes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden"
            >
              {/* Card */}
              <div className="relative p-8 bg-gray-50 dark:bg-gray-800 rounded-3xl shadow-neumorphism dark:shadow-neumorphism-dark hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 h-full">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Highlight Badge */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs px-3 py-1 rounded-full font-semibold transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    {feature.highlight}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                <div className="absolute inset-0.5 rounded-3xl bg-gray-50 dark:bg-gray-800 -z-10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20">
          <div className="relative p-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-3xl shadow-2xl overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Career?
              </h3>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Join thousands of students who have successfully transitioned to high-paying tech careers 
                with our proven methodology and guaranteed placement support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-orange-500 rounded-2xl hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Start Your Journey
                </button>
                <button className="px-8 py-4 bg-white/20 text-white rounded-2xl hover:bg-white/30 transition-colors duration-200 font-semibold text-lg backdrop-blur-sm">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}