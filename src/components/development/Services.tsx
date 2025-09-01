import React from 'react';
import { Globe, Smartphone, Cloud, Bot, Database, ShoppingCart, Settings, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Custom web apps built with modern frameworks like React, Vue, and Angular for optimal performance.',
      features: ['Responsive Design', 'PWA Support', 'SEO Optimized']
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experience.',
      features: ['Cross-Platform', 'Native Performance', 'App Store Ready']
    },
    {
      icon: Cloud,
      title: 'SaaS Solutions',
      description: 'Scalable Software-as-a-Service platforms with multi-tenancy, subscription management, and analytics.',
      features: ['Multi-Tenant', 'Subscription Billing', 'Analytics Dashboard']
    },
    {
      icon: Bot,
      title: 'AI Solutions',
      description: 'Intelligent automation and AI-powered features including chatbots, ML models, and data analytics.',
      features: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics']
    },
    {
      icon: Database,
      title: 'API Development',
      description: 'Robust RESTful and GraphQL APIs with comprehensive documentation and security best practices.',
      features: ['RESTful APIs', 'GraphQL', 'API Documentation']
    },
    {
      icon: ShoppingCart,
      title: 'eCommerce',
      description: 'Full-featured online stores with payment integration, inventory management, and order tracking.',
      features: ['Payment Gateway', 'Inventory Management', 'Order Tracking']
    },
    {
      icon: Settings,
      title: 'CRM/ERP Systems',
      description: 'Custom business management systems tailored to your workflow and operational requirements.',
      features: ['Custom Workflows', 'Data Migration', 'Third-party Integration']
    },
    {
      icon: Zap,
      title: 'DevOps & Cloud',
      description: 'CI/CD pipelines, cloud infrastructure setup, and automated deployment solutions for scalability.',
      features: ['CI/CD Pipelines', 'Cloud Infrastructure', 'Automated Deployment']
    }
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 dark:text-white mb-4">
            What We Build
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From concept to deployment, we deliver comprehensive software solutions that drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200/30 dark:border-yellow-600/30 hover:border-orange-400 dark:hover:border-yellow-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 dark:from-yellow-400 dark:to-orange-500 text-white group-hover:from-orange-600 group-hover:to-yellow-600 dark:group-hover:from-yellow-500 dark:group-hover:to-orange-600 transition-all duration-300">
                  <service.icon className="h-6 w-6" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold font-montserrat text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 bg-orange-500 dark:bg-yellow-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
