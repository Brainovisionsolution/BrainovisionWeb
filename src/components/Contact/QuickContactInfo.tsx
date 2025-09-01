import React from 'react';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

interface QuickContactInfoProps {
  isDarkMode: boolean;
}

export const QuickContactInfo: React.FC<QuickContactInfoProps> = ({ isDarkMode }) => {
  const cardClasses = isDarkMode
    ? 'bg-gray-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3)]'
    : 'bg-white shadow-[inset_0_2px_4px_rgba(251,146,60,0.1),inset_0_-2px_4px_rgba(252,211,77,0.1),0_8px_32px_rgba(251,146,60,0.2)]';

  const contactItems = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
      color: 'text-green-500'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@company.com',
      href: 'mailto:contact@company.com',
      color: 'text-blue-500'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Business Street, Hyderabad, India',
      href: 'https://maps.google.com/?q=123+Business+Street+Hyderabad+India',
      color: 'text-red-500'
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon–Fri, 9:00 AM – 6:00 PM IST',
      href: null,
      color: 'text-orange-500'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Quick Contact Information
          </h2>
          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Reach us through any of these convenient methods
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-3xl ${cardClasses} transition-all duration-300 hover:scale-105 group`}
            >
              <div className={`p-3 rounded-2xl mb-4 ${isDarkMode ? 'bg-gray-700' : 'bg-orange-50'} w-fit`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              
              <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                {item.label}
              </h3>
              
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-orange-500 transition-colors flex items-center group-hover:text-orange-500`}
                >
                  {item.value}
                  {item.href.startsWith('http') && (
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </a>
              ) : (
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};