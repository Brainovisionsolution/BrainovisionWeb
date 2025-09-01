import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-3xl shadow-neumorphism-inset p-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 rounded-full shadow-neumorphism-outset mb-6">
            <Calendar className="w-8 h-8 text-orange-600" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-6">
            Join Our Next Event
          </h2>
          
          <p className="text-xl text-orange-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Be part of our story. Create memories with us and see yourself in our next gallery update.
          </p>
          
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <span className="mr-2">Register Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-yellow-100 text-orange-700 rounded-2xl font-semibold shadow-neumorphism-outset hover:shadow-neumorphism-inset transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;