import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MessageCircle, Youtube } from 'lucide-react';

interface SocialMediaSectionProps {
  isDarkMode: boolean;
}

export const SocialMediaSection: React.FC<SocialMediaSectionProps> = ({ isDarkMode }) => {
  const cardClasses = isDarkMode
    ? 'bg-gray-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3)]'
    : 'bg-white shadow-[inset_0_2px_4px_rgba(251,146,60,0.1),inset_0_-2px_4px_rgba(252,211,77,0.1),0_8px_32px_rgba(251,146,60,0.2)]';

  const socialLinks = [
    {
      icon: Facebook,
      name: 'Facebook',
      handle: '@yourcompany',
      href: 'https://facebook.com/yourcompany',
      color: 'hover:text-blue-600',
      bgColor: isDarkMode ? 'hover:bg-blue-900/20' : 'hover:bg-blue-50'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      handle: '@yourcompany',
      href: 'https://twitter.com/yourcompany',
      color: 'hover:text-blue-400',
      bgColor: isDarkMode ? 'hover:bg-blue-900/20' : 'hover:bg-blue-50'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@yourcompany',
      href: 'https://instagram.com/yourcompany',
      color: 'hover:text-pink-500',
      bgColor: isDarkMode ? 'hover:bg-pink-900/20' : 'hover:bg-pink-50'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      handle: 'Your Company',
      href: 'https://linkedin.com/company/yourcompany',
      color: 'hover:text-blue-700',
      bgColor: isDarkMode ? 'hover:bg-blue-900/20' : 'hover:bg-blue-50'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      handle: 'Your Company',
      href: 'https://youtube.com/@yourcompany',
      color: 'hover:text-red-500',
      bgColor: isDarkMode ? 'hover:bg-red-900/20' : 'hover:bg-red-50'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      handle: '+91 98765 43210',
      href: 'https://wa.me/919876543210',
      color: 'hover:text-green-500',
      bgColor: isDarkMode ? 'hover:bg-green-900/20' : 'hover:bg-green-50'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className={`p-8 rounded-3xl ${cardClasses} transition-all duration-300`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Connect With Us
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Follow us on social media for updates, news, and behind-the-scenes content
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-4 p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-white'
                } ${social.bgColor} ${social.color} group`}
              >
                <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-gray-600' : 'bg-white'} group-hover:scale-110 transition-transform`}>
                  <social.icon className="w-6 h-6" />
                </div>
                
                <div>
                  <h3 className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    {social.name}
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {social.handle}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full ${
              isDarkMode ? 'bg-gray-700' : 'bg-orange-50'
            }`}>
              <MessageCircle className="w-5 h-5 text-orange-500" />
              <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                For immediate assistance, message us on WhatsApp
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};