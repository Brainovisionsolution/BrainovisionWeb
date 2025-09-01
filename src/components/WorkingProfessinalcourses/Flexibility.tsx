import React from 'react';
import { Calendar, Clock, Zap, Moon, Sun, Watch, Coffee, Sunrise } from 'lucide-react';

const Flexibility: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Learn When <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">You Want</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our orange-yellow themed flexibility puts you in control of your learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Time Flexibility */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-orange-100/30 dark:hover:shadow-orange-900/20 hover:shadow-xl transition-all border border-orange-50 dark:border-orange-900/50">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900 dark:to-yellow-900 rounded-lg mr-4">
                <Clock className="h-6 w-6 text-orange-600 dark:text-orange-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">24/7 Access</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Learn anytime with our always-available platform. Morning coffee or midnight oil - your choice.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm rounded-full flex items-center">
                <Sunrise className="h-3 w-3 mr-1" /> Early Bird
              </span>
              <span className="px-3 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm rounded-full flex items-center">
                <Coffee className="h-3 w-3 mr-1" /> Daytime
              </span>
              <span className="px-3 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm rounded-full flex items-center">
                <Moon className="h-3 w-3 mr-1" /> Night Owl
              </span>
            </div>
          </div>

          {/* Pace Control */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-orange-100/30 dark:hover:shadow-orange-900/20 hover:shadow-xl transition-all border border-orange-50 dark:border-orange-900/50">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900 dark:to-yellow-900 rounded-lg mr-4">
                <Zap className="h-6 w-6 text-yellow-600 dark:text-yellow-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Your Speed</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Control your learning speed with adjustable video playback and self-paced modules.
            </p>
            <div className="mt-4">
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                <div 
                  className="bg-gradient-to-r from-orange-400 to-yellow-400 h-2.5 rounded-full" 
                  style={{width: '75%'}}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                <span className="text-orange-500">0.5x</span>
                <span className="text-yellow-500 font-medium">Your Pace</span>
                <span className="text-orange-500">2x</span>
              </div>
            </div>
          </div>

          {/* Schedule Integration */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-orange-100/30 dark:hover:shadow-orange-900/20 hover:shadow-xl transition-all border border-orange-50 dark:border-orange-900/50">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900 dark:to-yellow-900 rounded-lg mr-4">
                <Calendar className="h-6 w-6 text-orange-600 dark:text-orange-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Smart Reminders</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              We adapt to your calendar with intelligent scheduling that respects your commitments.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm rounded-full">
                Work Days
              </span>
              <span className="px-3 py-1 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-sm rounded-full">
                Weekends
              </span>
              <span className="px-3 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm rounded-full">
                Vacation Mode
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-medium rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5">
            Start Your Flexible Journey
            <Watch className="h-4 w-4 ml-2 inline" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Flexibility;