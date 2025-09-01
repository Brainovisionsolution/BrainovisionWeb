import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Gift, Calendar, Bell } from 'lucide-react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubscribed(true);
    setEmail('');
  };

  const benefits = [
    {
      icon: Calendar,
      title: 'Early Access',
      description: 'Get notified about new events before public announcements'
    },
    {
      icon: Gift,
      title: 'Exclusive Offers',
      description: 'Special discounts and free workshop access for subscribers'
    },
    {
      icon: Bell,
      title: 'Weekly Updates',
      description: 'Curated tech news, tutorials, and industry insights'
    }
  ];

  const stats = [
    { value: '25K+', label: 'Subscribers' },
    { value: '4.8/5', label: 'Rating' },
    { value: '95%', label: 'Open Rate' },
    { value: 'Weekly', label: 'Frequency' }
  ];

  if (isSubscribed) {
    return (
      <section className="py-20 bg-background-white dark:bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-50 dark:bg-green-900/20 rounded-3xl p-12">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-text-charcoal dark:text-dark-text mb-4">
              Welcome to Our Community! 🎉
            </h2>
            <p className="text-lg text-text-gray dark:text-dark-muted mb-8">
              Thank you for subscribing! You'll receive your first newsletter within 24 hours with 
              exclusive content and early access to upcoming events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsSubscribed(false)}
                className="px-6 py-3 bg-primary-yellow hover:bg-primary-orange text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Subscribe Another Email
              </button>
              <button className="px-6 py-3 border-2 border-primary-yellow text-primary-yellow hover:bg-primary-yellow hover:text-white font-semibold rounded-lg transition-colors duration-200">
                Browse Events
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="newsletter" className="py-20 bg-background-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-charcoal dark:text-dark-text mb-4">
            Stay <span className="text-primary-yellow">Updated</span>
          </h2>
          <p className="text-lg text-text-gray dark:text-dark-muted max-w-3xl mx-auto">
            Join our newsletter to get the latest updates on workshops, hackathons, tech trends, 
            and exclusive opportunities delivered straight to your inbox.
          </p>
        </div>

        {/* Newsletter Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary-orange mb-2">{stat.value}</div>
              <div className="text-text-gray dark:text-dark-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Newsletter Section */}
        <div className="bg-gradient-to-r from-primary-yellow to-primary-orange rounded-3xl p-8 lg:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-6">
                Never Miss an Opportunity
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Get exclusive access to workshops, hackathons, and career opportunities. 
                Our newsletter is packed with valuable content to accelerate your tech journey.
              </p>

              {/* Benefits */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-sm opacity-80">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Signup Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-text-charcoal mb-2">
                  Subscribe Now
                </h4>
                <p className="text-text-gray">
                  Join 25,000+ students and professionals
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-gray" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full pl-10 pr-4 py-4 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-yellow focus:border-transparent text-text-charcoal bg-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-primary-orange hover:bg-primary-yellow text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Subscribe Free</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-text-gray text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>

              {/* Social Proof */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-2 text-sm text-text-gray">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-gradient-to-br from-primary-yellow to-primary-orange rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <span>Join 25K+ subscribers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Preview */}
        <div className="bg-background-pale dark:bg-dark-card rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-text-charcoal dark:text-dark-text mb-6 text-center">
            What You'll Get in Our Newsletter
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-text-charcoal dark:text-dark-text mb-2">
                Event Updates
              </h4>
              <p className="text-text-gray dark:text-dark-muted">
                Latest workshops, hackathons, and registration deadlines
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-text-charcoal dark:text-dark-text mb-2">
                Exclusive Content
              </h4>
              <p className="text-text-gray dark:text-dark-muted">
                Free tutorials, templates, and resources for subscribers only
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-text-charcoal dark:text-dark-text mb-2">
                Career Opportunities
              </h4>
              <p className="text-text-gray dark:text-dark-muted">
                Job openings, internships, and networking opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;