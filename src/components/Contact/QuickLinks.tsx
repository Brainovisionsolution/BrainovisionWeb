import React from 'react';
import { HelpCircle, Briefcase, Users, ExternalLink } from 'lucide-react';

interface QuickLinksProps {
  isDarkMode: boolean;
}

export const QuickLinks: React.FC<QuickLinksProps> = ({ isDarkMode }) => {
  const cardClasses = isDarkMode
    ? 'bg-gray-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3)]'
    : 'bg-white shadow-[inset_0_2px_4px_rgba(251,146,60,0.1),inset_0_-2px_4px_rgba(252,211,77,0.1),0_8px_32px_rgba(251,146,60,0.2)]';

  const links = [
    { icon: HelpCircle, label: 'FAQ', href: '#' },
    { icon: Briefcase, label: 'Careers', href: '#' },
    { icon: Users, label: 'About Us', href: '#' }
  ];

  return (
    <div className={`p-6 rounded-3xl ${cardClasses} transition-all duration-300`}>
      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
        Quick Links
      </h3>
      
      <div className="space-y-3">
        {links.map((link, index) => (
          <a 
            key={index}
            href={link.href} 
            className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
              isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-orange-50'
            }`}
          >
            <link.icon className="w-5 h-5 text-orange-500" />
            <span className="font-medium">{link.label}</span>
            <ExternalLink className="w-4 h-4 ml-auto opacity-50" />
          </a>
        ))}
      </div>
    </div>
  );
};