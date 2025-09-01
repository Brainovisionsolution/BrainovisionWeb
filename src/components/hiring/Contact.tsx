import React, { useState } from 'react';
import { Mail, Bell, CheckCircle } from 'lucide-react';

interface ContactProps {
  isDark: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDark }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <section className={`py-16 transition-all duration-300 ${
      isDark ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-yellow-50 to-orange-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Stay Connected</h2>
          <p className={`text-xl mb-8 transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Get notified about new job openings and company updates
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email HR */}
            <div className={`rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 ${
              isDark 
                ? 'bg-gray-900 shadow-neumorphic-dark hover:shadow-neumorphic-dark-hover' 
                : 'bg-white shadow-neumorphic-light hover:shadow-neumorphic-light-hover'
            }`}>
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-800 shadow-neumorphic-dark' 
                  : 'bg-gray-100 shadow-neumorphic-light'
              }`}>
                <Mail className={`w-6 h-6 transition-colors duration-300 ${
                  isDark ? 'text-yellow-400' : 'text-orange-600'
                }`} />
              </div>
              <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Contact HR</h3>
              <p className={`mb-6 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>Have questions about our hiring process?</p>
              <a
                href="mailto:careers@techcorp.com"
                className={`inline-block px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-800 text-yellow-400 shadow-neumorphic-dark hover:shadow-neumorphic-dark-hover' 
                    : 'bg-gray-100 text-orange-600 shadow-neumorphic-light hover:shadow-neumorphic-light-hover'
                }`}
              >
                Email Us
              </a>
            </div>

            {/* Job Alerts */}
            <div className={`rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 ${
              isDark 
                ? 'bg-gray-900 shadow-neumorphic-dark hover:shadow-neumorphic-dark-hover' 
                : 'bg-white shadow-neumorphic-light hover:shadow-neumorphic-light-hover'
            }`}>
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-800 shadow-neumorphic-dark' 
                  : 'bg-gray-100 shadow-neumorphic-light'
              }`}>
                <Bell className={`w-6 h-6 transition-colors duration-300 ${
                  isDark ? 'text-yellow-400' : 'text-orange-600'
                }`} />
              </div>
              <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Job Alerts</h3>
              <p className={`mb-6 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>Subscribe to get notified about new positions</p>
              
              {isSubscribed ? (
                <div className={`flex items-center justify-center transition-colors duration-300 ${
                  isDark ? 'text-green-400' : 'text-green-600'
                }`}>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Successfully subscribed!</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className={`w-full px-4 py-3 rounded-2xl border-none outline-none transition-all duration-300 ${
                      isDark 
                        ? 'bg-gray-800 text-white placeholder-gray-400 shadow-inner-dark focus:shadow-inner-dark-focus' 
                        : 'bg-gray-100 text-gray-900 placeholder-gray-500 shadow-inner-light focus:shadow-inner-light-focus'
                    }`}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 rounded-2xl font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                      isDark 
                        ? 'bg-gray-800 text-yellow-400 shadow-neumorphic-dark hover:shadow-neumorphic-dark-hover' 
                        : 'bg-gray-100 text-orange-600 shadow-neumorphic-light hover:shadow-neumorphic-light-hover'
                    }`}
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;