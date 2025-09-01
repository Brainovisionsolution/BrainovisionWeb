import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface SocialMediaProps {
  isDarkMode: boolean;
}

export const SocialMedia: React.FC<SocialMediaProps> = ({ isDarkMode }) => {
  const cardClasses = isDarkMode
    ? 'bg-gray-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3)]'
    : 'bg-white shadow-[inset_0_2px_4px_rgba(251,146,60,0.1),inset_0_-2px_4px_rgba(252,211,77,0.1),0_8px_32px_rgba(251,146,60,0.2)]';

  const socialLinks = [
    { icon: Facebook, color: 'hover:text-blue-500', href: '#' },
    { icon: Twitter, color: 'hover:text-blue-400', href: '#' },
    { icon: Instagram, color: 'hover:text-pink-500', href: '#' },
    { icon: Linkedin, color: 'hover:text-blue-600', href: '#' }
  ];

  return (
    <div className={`p-6 rounded-3xl ${cardClasses} transition-all duration-300`}>
      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
        Follow Us
      </h3>
      
      <div className="flex space-x-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
              isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-orange-50'
            } ${social.color}`}
          >
            <social.icon className="w-6 h-6" />
          </a>
        ))}
      </div>
    </div>
  );
};