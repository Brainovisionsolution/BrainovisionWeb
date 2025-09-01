import React, { useState } from 'react';
import { Check, Star, Zap, Crown, Gift } from 'lucide-react';

interface PricingProps {
  onOpenModal: (type: 'enroll' | 'demo' | 'scholarship') => void;
}

const Pricing: React.FC<PricingProps> = ({ onOpenModal }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'lifetime'>('lifetime');

  const plans = [
    {
      id: 'free',
      name: 'Free Starter',
      icon: Gift,
      description: 'Perfect for exploring our content',
      monthlyPrice: 0,
      lifetimePrice: 0,
      originalPrice: null,
      badge: 'FREE',
      badgeColor: 'from-yellow-400 to-orange-400',
      buttonText: 'Get Started Free',
      buttonStyle: 'bg-white text-orange-600 shadow-neumorphic hover:shadow-neumorphic-inset',
      features: [
        'Access to basic courses',
        'Live session recordings',
        'Community access',
        'Basic project templates',
        'Email support'
      ],
      limitations: [
        'No 1-on-1 mentorship',
        'No certificate',
        'Limited project reviews'
      ]
    },
    {
      id: 'pro',
      name: 'Pro Learner',
      icon: Star,
      description: 'Most popular choice for serious learners',
      monthlyPrice: 4999,
      lifetimePrice: 24999,
      originalPrice: 49999,
      badge: 'POPULAR',
      badgeColor: 'from-yellow-500 to-orange-500',
      buttonText: 'Start Learning',
      buttonStyle: 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white hover:brightness-110 shadow-neumorphic hover:shadow-neumorphic-inset',
      isPopular: true,
      features: [
        'All course content',
        'Live interactive sessions',
        '1-on-1 mentor support',
        'Real-world projects',
        'Industry certificate',
        'Lifetime course access',
        'Priority community support',
        'Code review sessions',
        'Career guidance calls'
      ]
    },
    {
      id: 'elite',
      name: 'Elite Professional',
      icon: Crown,
      description: 'Complete career transformation package',
      monthlyPrice: 7999,
      lifetimePrice: 39999,
      originalPrice: 79999,
      badge: 'BEST VALUE',
      badgeColor: 'from-yellow-500 to-orange-500',
      buttonText: 'Go Elite',
      buttonStyle: 'bg-gradient-to-r from-orange-600 to-yellow-600 text-white hover:brightness-110 shadow-neumorphic hover:shadow-neumorphic-inset',
      features: [
        'Everything in Pro',
        'Personal career coach',
        'Resume & LinkedIn optimization',
        'Mock interview sessions',
        'Placement assistance',
        'Salary negotiation support',
        'Industry networking events',
        'Exclusive masterclasses',
        'Direct referrals to top companies',
        '1-year post-placement support'
      ]
    }
  ];

  const getPrice = (plan: any) => {
    if (plan.monthlyPrice === 0) return 'Free';
    const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.lifetimePrice;
    return `₹${price.toLocaleString()}`;
  };

  const getSavings = (plan: any) => {
    if (!plan.originalPrice) return null;
    const currentPrice = billingCycle === 'monthly' ? plan.monthlyPrice : plan.lifetimePrice;
    const savings = Math.round(((plan.originalPrice - currentPrice) / plan.originalPrice) * 100);
    return savings;
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 via-white to-orange-50 dark:from-[#1a1a1a] dark:via-[#111] dark:to-black text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Learning</span> Path
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Flexible pricing options designed to fit your learning goals and budget. Start free or go premium for the complete experience.
          </p>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-yellow-700 dark:text-yellow-300' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'lifetime' : 'monthly')}
              className="relative w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full transition-all duration-300"
            >
              <div className={`absolute top-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-transform duration-300 ${
                billingCycle === 'lifetime' ? 'translate-x-8' : 'translate-x-1'
              }`}></div>
            </button>
            <span className={`text-lg ${billingCycle === 'lifetime' ? 'text-orange-700 dark:text-orange-300' : 'text-gray-400'}`}>
              One-time Lifetime
            </span>
            {billingCycle === 'lifetime' && (
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
                Save up to 50%
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const savings = getSavings(plan);

            return (
              <div
                key={plan.id}
                className={`relative bg-white dark:bg-[#1e1e1e] text-gray-800 dark:text-white border border-yellow-200 dark:border-orange-700 rounded-3xl p-8 shadow-neumorphic dark:shadow-neumorphic-dark hover:scale-105 transition-transform duration-300`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                <div className={`inline-block bg-gradient-to-r ${plan.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full mb-6`}>
                  {plan.badge}
                </div>
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.badgeColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{plan.description}</p>
                </div>
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center space-x-2">
                    <span className="text-4xl font-bold text-orange-600 dark:text-yellow-400">{getPrice(plan)}</span>
                    {plan.monthlyPrice > 0 && (
                      <span className="text-gray-500 dark:text-gray-400">
                        {billingCycle === 'monthly' ? '/month' : 'one-time'}
                      </span>
                    )}
                  </div>
                  {savings && (
                    <div className="mt-2">
                      <span className="text-gray-400 line-through">₹{plan.originalPrice?.toLocaleString()}</span>
                      <span className="text-green-500 font-bold ml-2">Save {savings}%</span>
                    </div>
                  )}
                </div>
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check size={20} className="text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {plan.limitations?.map((limitation, index) => (
                    <div key={index} className="flex items-center space-x-3 opacity-60">
                      <div className="w-5 h-5 flex-shrink-0">
                        <div className="w-4 h-0.5 bg-gray-500 transform rotate-45 translate-y-2"></div>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{limitation}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => onOpenModal('enroll')}
                  className={`w-full ${plan.buttonStyle} py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105`}
                >
                  {plan.buttonText}
                </button>
                {plan.id !== 'free' && (
                  <div className="mt-4 text-center">
                    <button
                      onClick={() => onOpenModal('demo')}
                      className="text-orange-500 hover:text-orange-400 text-sm font-medium transition-colors"
                    >
                      Try free demo first
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
