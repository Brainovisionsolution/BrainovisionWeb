import React from 'react';
import { ArrowRight, Rocket, MessageCircle } from 'lucide-react';

interface CTASectionProps {
  darkMode: boolean;
}

const CTASection: React.FC<CTASectionProps> = ({ darkMode }) => {
  return (
    <section className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="max-w-7xl mx-auto">
        <div className={`relative overflow-hidden rounded-3xl p-12 md:p-16 text-center ${
          darkMode 
            ? 'bg-gray-900 shadow-[20px_20px_40px_#1f2937,-20px_-20px_40px_#374151]' 
            : 'bg-white shadow-[20px_20px_40px_#d1d5db,-20px_-20px_40px_#ffffff]'
        }`}>
          {/* Background decorations */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400"></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"></div>
          </div>

          <div className="relative z-10">
            {/* Icon */}
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-8 ${
              darkMode 
                ? 'bg-gradient-to-r from-orange-600 to-yellow-600 shadow-[inset_5px_5px_10px_rgba(255,140,0,0.3),inset_-5px_-5px_10px_rgba(255,215,0,0.3)]' 
                : 'bg-gradient-to-r from-orange-500 to-yellow-500 shadow-[inset_5px_5px_10px_rgba(255,140,0,0.3),inset_-5px_-5px_10px_rgba(255,215,0,0.3)]'
            }`}>
              <Rocket className="w-8 h-8 text-white" />
            </div>

            {/* Heading */}
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Have a Project <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                in Mind?
              </span>
            </h2>

            <p className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Let's transform your ideas into reality. We specialize in creating innovative solutions 
              that drive results and exceed expectations.
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Rocket,
                  title: 'Fast Delivery',
                  description: 'Quick turnaround without compromising quality'
                },
                {
                  icon: MessageCircle,
                  title: '24/7 Support',
                  description: 'Always available to help you succeed'
                },
                {
                  icon: ArrowRight,
                  title: 'Proven Results',
                  description: '100% client satisfaction guarantee'
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl ${
                    darkMode 
                      ? 'bg-gray-800 shadow-[8px_8px_16px_#1f2937,-8px_-8px_16px_#374151]' 
                      : 'bg-gray-50 shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff]'
                  }`}
                >
                  <feature.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                  <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-4 rounded-xl text-white font-semibold text-lg bg-gradient-to-r from-orange-500 to-yellow-500 shadow-[8px_8px_16px_rgba(255,140,0,0.4),-8px_-8px_16px_rgba(255,215,0,0.4)] hover:shadow-[inset_8px_8px_16px_rgba(255,140,0,0.2),inset_-8px_-8px_16px_rgba(255,215,0,0.2)] transform hover:scale-105 transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  Start a Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 shadow-[8px_8px_16px_#1f2937,-8px_-8px_16px_#4b5563] hover:shadow-[inset_4px_4px_8px_#1f2937,inset_-4px_-4px_8px_#4b5563]' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#d1d5db,inset_-4px_-4px_8px_#ffffff]'
              }`}>
                View Our Process
              </button>
            </div>

            {/* Contact info */}
            <div className="mt-8 pt-8 border-t border-orange-500/20">
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Ready to start? Email us at{' '}
                <a 
                  href="mailto:hello@company.com" 
                  className="text-orange-500 hover:text-orange-600 font-semibold transition-colors duration-200"
                >
                  hello@company.com
                </a>
                {' '}or call{' '}
                <a 
                  href="tel:+1234567890" 
                  className="text-orange-500 hover:text-orange-600 font-semibold transition-colors duration-200"
                >
                  +1 (234) 567-890
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;