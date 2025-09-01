import React from 'react';
import { ArrowRight, Calendar, Briefcase } from 'lucide-react';

interface CallToActionProps {
  isDarkMode: boolean;
}

export const CallToAction: React.FC<CallToActionProps> = ({ isDarkMode }) => {
  const cardClasses = isDarkMode
    ? 'bg-gray-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3)]'
    : 'bg-white shadow-[inset_0_2px_4px_rgba(251,146,60,0.1),inset_0_-2px_4px_rgba(252,211,77,0.1),0_8px_32px_rgba(251,146,60,0.2)]';

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Career Opportunities */}
          <div className={`p-8 rounded-3xl ${cardClasses} transition-all duration-300 hover:scale-[1.02] group`}>
            <div className={`p-4 rounded-2xl mb-6 w-fit ${isDarkMode ? 'bg-gray-700' : 'bg-orange-100'}`}>
              <Briefcase className="w-8 h-8 text-orange-500" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Join Our Team
            </h3>
            
            <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Looking for career opportunities? We're always seeking talented individuals to join our growing team. 
              Explore exciting positions and grow your career with us.
            </p>
            
            <a
              href="/careers"
              className={`inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600' 
                  : 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-orange-600 hover:to-yellow-600'
              } shadow-[0_4px_16px_rgba(251,146,60,0.4)] hover:shadow-[0_6px_24px_rgba(251,146,60,0.6)]`}
            >
              <span>View Careers</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Free Consultation */}
          <div className={`p-8 rounded-3xl ${cardClasses} transition-all duration-300 hover:scale-[1.02] group`}>
            <div className={`p-4 rounded-2xl mb-6 w-fit ${isDarkMode ? 'bg-gray-700' : 'bg-yellow-100'}`}>
              <Calendar className="w-8 h-8 text-yellow-500" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Free Consultation
            </h3>
            
            <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Want to discuss your next project? Book a free consultation with our experts. 
              We'll analyze your requirements and provide tailored solutions for your business.
            </p>
            
            <a
              href="/consultation"
              className={`inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600' 
                  : 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600'
              } shadow-[0_4px_16px_rgba(252,211,77,0.4)] hover:shadow-[0_6px_24px_rgba(252,211,77,0.6)]`}
            >
              <span>Book Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};